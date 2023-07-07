import { useNavigate } from "react-router-dom";


function Navbar(){

    const navigate = useNavigate();
    return(
        <nav class="flex items-center justify-center h-8 py-10 bg-red border-b border-cream">
        <a onClick={()=>{
            navigate('/')
        }}  id="logBtn"  class="text-xl cursor-pointer rounded-xl font-semibold py-1 px-3 text-red bg-cream md:text-3xl xl:text-[32px]">FoodieFaves</a>
    </nav>
    )
}

export default Navbar;