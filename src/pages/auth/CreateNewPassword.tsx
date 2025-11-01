import AuthLayout from "../../layout/AuthLayout.tsx";
import ImageWithSkeleton from "@/components/ui/ImageWIthSkeleton.tsx";
import forgotPassword from "/auth/forgotpassword.svg";
import {
    Card,
    CardContent, CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import { useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ArrowLeft, EyeIcon, EyeOffIcon, Key} from "lucide-react";

export default function CreateNewPasswordPage() {

    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [isPasswordOn, setIsPasswordOn] = useState<boolean>(false);
    const [isConfirmPasswordOn, setIsConfirmPasswordOn] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = async () => navigate("/reset-password");

    return (
        <AuthLayout>
            <AuthLayout.Left className={"w-full h-full flex items-center"} >
                <div className={"w-[350px] h-[400px] md:w-[450px] md:h-[550px] mx-auto text-white text-center mt-4 md:mt-8"}>
                    <div className={"w-[80%] flex justify-center mx-auto"}>
                        <ImageWithSkeleton src={forgotPassword}/>
                    </div>
                    <h1 className={"text-4xl md:text-6xl font-bold my-3"}>Forgot Password</h1>
                    <p className={"text-sm tracking-tight space-y-2"}>Enter your registered email address, and we’ll send you a secure link to reset your password and regain access to your Lunq account.</p>
                </div>
            </AuthLayout.Left>
            <AuthLayout.Right className={"w-full items-center flex h-full"} >
                <div className={"w-[300px] h-[200px] md:w-[450px] md:h-[550px] mx-auto"}>
                    <Card className="w-full max-w-sm shadow-md">
                        <CardHeader>
                            <CardTitle className={"text-center"}>
                                <div className={"rounded-full mx-auto w-[35px] h-[35px] p-1 flex justify-center items-center shadow-md"}>
                                    <Key color={"#1828B5"} />
                                </div>
                            </CardTitle>
                            <CardDescription>
                                <div className={"w-full h-full text-center"}>
                                    <h1 className={"text-xl font-semibold text-gray-900"}>Create a New Password</h1>
                                    <p className={"text-sm mt-2"}>Your new password must be different to previously used passwords.</p>
                                </div>
                            </CardDescription>
                            {/*<CardAction>*/}
                            {/*    <Button variant="link">Sign Up</Button>*/}
                            {/*</CardAction>*/}
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="flex flex-col gap-6">
                                    <div className="grid gap-2">
                                        <div className="flex items-center relative">
                                            <Label htmlFor="password">Password</Label>
                                            {
                                                isPasswordOn? (
                                                    <div
                                                        className={"cursor-pointer absolute right-4 top-9 text-[#1828B5]"}
                                                        onClick={() => setIsPasswordOn(!isPasswordOn)}
                                                    >
                                                        <EyeIcon size={19} />
                                                    </div>
                                                ):(
                                                    <div
                                                        className={"cursor-pointer absolute right-4 top-9 text-[#1828B5]"}
                                                        onClick={() => setIsPasswordOn(!isPasswordOn)}
                                                    >
                                                        <EyeOffIcon size={19} />
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="p-[1px] rounded-full bg-gradient-to-r from-[#4A58F9] to-[#8BEAFE]">
                                            <Input
                                                id="password"
                                                type={!isPasswordOn ? "password" : "text"}
                                                required
                                                value={password}
                                                placeholder="password"
                                                className={"py-5 rounded-full w-full bg-white text-gray-800"}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="flex items-center relative">
                                            <Label htmlFor="confirm-password">Confirm Password</Label>
                                            {
                                                isConfirmPasswordOn? (
                                                    <div
                                                        className={"cursor-pointer absolute right-4 top-9 text-[#1828B5]"}
                                                        onClick={() => setIsConfirmPasswordOn(!isConfirmPasswordOn)}
                                                    >
                                                        <EyeIcon size={19} />
                                                    </div>
                                                ):(
                                                    <div
                                                        className={"cursor-pointer absolute right-4 top-9 text-[#1828B5]"}
                                                        onClick={() => setIsConfirmPasswordOn(!isConfirmPasswordOn)}
                                                    >
                                                        <EyeOffIcon size={19} />
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="p-[1px] rounded-full bg-gradient-to-r from-[#4A58F9] to-[#8BEAFE]">
                                            <Input
                                                id="confirm-password"
                                                type={!isConfirmPasswordOn ? "password" : "text"}
                                                required
                                                value={confirmPassword}
                                                placeholder="confirm password"
                                                className={"py-5 rounded-full w-full bg-white text-gray-800"}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                        </div>
                                        {/*<Link*/}
                                        {/*    to={"/forgot-password"}*/}
                                        {/*    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"*/}
                                        {/*>*/}
                                        {/*    Forgot your password?*/}
                                        {/*</Link>*/}
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <Button onClick={() => handleSubmit()} type="submit" className="w-full rounded-full py-5 bg-linear-to-l from-[#0170DA] to-[#002282] cursor-pointer">
                                Reset Password
                            </Button>
                            <CardTitle className="text-center text-sm mt-2 font-normal text-gray-600">
                                <span className="font-semibold bg-gradient-to-r from-[#002282] to-[#0170DA] bg-clip-text text-transparent hover:opacity-80 transition-all duration-300">
                                    <Link to="/sign-in" className={"flex justify-center items-center text-[#667085]"}>
                                        <ArrowLeft color={"#667085"} />
                                        Back to log in
                                    </Link>
                                </span>
                            </CardTitle>
                        </CardFooter>
                    </Card>
                </div>
            </AuthLayout.Right>
        </AuthLayout>
    )
}