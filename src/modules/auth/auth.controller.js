import jwt from "jsonwebtoken";
import handleAsync from "../../common/utils/handleAsync.js";
import { User } from "../user/user.model.js";
import { configenv } from "../../common/configs/configenv.js";
import createError from "../../common/utils/createError.js";

// REGISTER
export const registerAuth = handleAsync(async (req, res, next) => {
  const { email, password, name } = req.body;

  // 1. Check email tồn tại
  const existUser = await User.findOne({ email });
  if (existUser) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Email đã tồn tại",
    });
  }

  // 2. Tạo user (password sẽ được hash ở model)
  const newUser = await User.create({
    email,
    password,
    name,
  });

  // 3. Ẩn password
  newUser.password = undefined;

  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Đăng ký thành công",
    data: newUser,
  });
});

// LOGIN
export const loginAuth = handleAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!configenv.JWT_SECRET || !configenv.JWT_REFRESH_SECRET) {
    return next(
      createError(
        500,
        "Thiếu JWT_SECRET hoặc JWT_REFRESH_SECRET trong file .env"
      )
    );
  }

  // 1. Tìm user
  const existUser = await User.findOne({ email });
  if (!existUser) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Email hoặc mật khẩu không đúng",
    });
  }

  // 2. So sánh password (dùng method trong model)
  const isMatch = await existUser.comparePassword(password);
  if (!isMatch) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Email hoặc mật khẩu không đúng",
    });
  }

  // 3. Tạo token
  const accessToken = jwt.sign(
    { userId: existUser._id, role: existUser.role },
    configenv.JWT_SECRET,
    { expiresIn: "1h" },
  );

  const refreshToken = jwt.sign(
    { userId: existUser._id },
    configenv.JWT_REFRESH_SECRET,
    { expiresIn: "15d" },
  );

  // 4. Ẩn password
  existUser.password = undefined;

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Đăng nhập thành công",
    data: existUser,
    accessToken,
    refreshToken,
  });
});
