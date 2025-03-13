import Link from "next/link";

const ButtonLogin = ({extraStyle}) => {
    return <div className={`btn btn-primary border border-gray-300 shadow-md px-6 py-3 ${extraStyle ? extraStyle : ""}`}>Criar conta Grátis</div>
}

export default ButtonLogin;
