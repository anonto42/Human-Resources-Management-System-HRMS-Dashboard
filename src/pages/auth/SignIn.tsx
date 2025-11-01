import AuthLayout from "../../layout/AuthLayout.tsx";
import ImageWithSkeleton from "@/components/ui/ImageWIthSkeleton.tsx";
import SignInImage from "/auth/signin.svg";
import GoogleImage from "/auth/google.png";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useState} from "react";
import {Link} from "react-router-dom";
import {EyeIcon, EyeOffIcon} from "lucide-react";

export default function SignInPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isPasswordOn, setIsPasswordOn] = useState<boolean>(false);

    const signIn = async () => {}
    const googleAuth = async () => {}

    return (
        <AuthLayout>
            <AuthLayout.Left className={"w-full h-full flex items-center"} >
                <div className={"w-[350px] h-[400px] md:w-[450px] md:h-[550px] mx-auto text-white text-center mt-4 md:mt-8"}>
                    <div className={"w-[80%] flex justify-center mx-auto"}>
                        <ImageWithSkeleton src={SignInImage}/>
                    </div>
                    <h1 className={"text-4xl md:text-6xl font-bold my-3"}>Welcome Back</h1>
                    <p className={"text-sm tracking-tight space-y-2"}>Log in to connect with verified professionals, manage projects, and collaborate easily. Lunq offers secure payments, direct contracts, and zero commission—giving you full control over your work and earnings.</p>
                </div>
            </AuthLayout.Left>
            <AuthLayout.Right className={"w-full items-center flex h-full"} >
                <div className={"w-[300px] h-[200px] md:w-[450px] md:h-[550px] mx-auto"}>
                    <Card className="w-full max-w-sm shadow-md">
                        <CardHeader>
                            <CardTitle className={"text-center "}>Welcome back! Please enter your details.</CardTitle>
                            {/*<CardDescription>*/}
                            {/*    Enter your email below to login to your account*/}
                            {/*</CardDescription>*/}
                            {/*<CardAction>*/}
                            {/*    <Button variant="link">Sign Up</Button>*/}
                            {/*</CardAction>*/}
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="flex flex-col gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email" className={"font-normal"}>Email</Label>
                                        <div className="p-[1px] rounded-full bg-gradient-to-r from-[#4A58F9] to-[#8BEAFE]">
                                            <Input
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                id="email"
                                                type="email"
                                                placeholder="m@example.com"
                                                required
                                                className="py-5 rounded-full w-full bg-white text-gray-800 "
                                            />
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="flex items-center relative">
                                            <Label htmlFor="password">Password</Label>
                                            {
                                                isPasswordOn? (
                                                    <div
                                                        className={"cursor-pointer absolute right-4 top-9"}
                                                        onClick={() => setIsPasswordOn(!isPasswordOn)}
                                                    >
                                                        <EyeIcon size={19} />
                                                    </div>
                                                ):(
                                                    <div
                                                        className={"cursor-pointer absolute right-4 top-9"}
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
                                            <Link
                                                to={"/forgot-password"}
                                                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                            >
                                                Forgot your password?
                                            </Link>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <Button onClick={() => signIn()} type="submit" className="w-full rounded-full py-5 bg-linear-to-l from-[#0170DA] to-[#002282] cursor-pointer">
                                Sign In
                            </Button>
                            <div className="p-[1px] rounded-full w-full bg-gradient-to-r from-[#4A58F9] to-[#8BEAFE]">
                                <Button onClick={() => googleAuth()} variant="outline" className="w-full rounded-full py-5 cursor-pointer">
                                    <div className={"w-[20px] h-[20px]"}>
                                        <ImageWithSkeleton
                                            src={GoogleImage}
                                        />
                                    </div>
                                    Login with Google
                                </Button>
                            </div>
                            <CardTitle className="text-center text-sm mt-2 font-normal text-gray-600">
                                Don’t have an account?{" "}
                                <span className="font-semibold bg-gradient-to-r from-[#002282] to-[#0170DA] bg-clip-text text-transparent hover:opacity-80 transition-all duration-300">
                                    <Link to="/sign-up">Sign Up</Link>
                                </span>
                            </CardTitle>
                        </CardFooter>
                    </Card>
                </div>
            </AuthLayout.Right>
        </AuthLayout>
    )
}