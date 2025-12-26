
import InputComponent from "./InputComponent"
export default function SearchInput({page}) {
    return(
        <div className="mt-auto text-[0.5rem] flex items-center justify-between relative ml-[-0.125rem] mr-[-0.375rem]" >
            <div className="absolute bottom-0 right-0 left-0 w-[calc(100%-15px)] h-58" style={{background: "linear-gradient(176.94deg, rgba(254, 255, 255, 0) -4.78%, #FEFFFF 31.6%)"}}></div>
            <span className="mr-14 pl-2 uppercase relative">Find</span>
            <InputComponent page={page} />
        </div>
    )
}


