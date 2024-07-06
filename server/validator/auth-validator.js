const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({
      required_error: "username is required",
    })
    .trim()
    .min(3, { message: "name must be atleast of 3 character" })
    .max(255, { message: "name must not be more than 255 character" }),
  email: z
    .string({
      required_error: "email is required",
    })
    .trim()
    .email({ message: "Invalid email address " })
    .min(3, { message: "email must be atleast of 3 character" })
    .max(255, { message: "email must not be more than 255 character" }),

  phone: z
    .string({
      required_error: "phone is required",
    })
    .trim()
    .min(10, { message: "phone must be atleast of 10 character" })
    .max(20, { message: "phone must not be more than 10 character" }),
  password: z
    .string({
      required_error: "password is required",
    })
    .min(7, { message: "password must be atleast of 7 character" })
    .max(1024, { message: "password must not be more than 1024 character" }),
});
module.exports=signupSchema













