import Link from "next/link"
import useAuth from "../../data/hook/UseAuth"



export default function AvatarUsuario() {
    const { usuario } = useAuth()
    return (
        <Link href="/perfil">
            <img 
                src={usuario?.imagemUrl ?? '/images/avatar.avif'} 
                alt="Avatar do Usuário" 
                className="h-10 w-10 ml-3  rounded-full cursor-pointer"
            />
        </Link>
    )
}