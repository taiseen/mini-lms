import { LayoutType } from "@/types";

const AuthLayout = ({ children }: LayoutType) => {
  return (
    <div className="h-screen grid place-items-center bg-authPage bg-no-repeat bg-center bg-cover">
      {children}
    </div>
  );
};

export default AuthLayout;
