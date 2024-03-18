const SmallProfile=()=>{


    return(<>
    <div>
    </div>
        <div className="small-profile">
            <div className="cover-image w-full h-[180px] flex items-center justify-center rounded-[20px]">
            <img
              loading="lazy"
              src={"http://127.0.0.1:5000/image/" + 1}
              alt="Author avatar"
              className="shrink-0 my-auto w-9 aspect-square"
            />
            </div>
            <div className="pr-pic flex flex-col items-center justify-center pt-[120px]">
                <p className="name font-[bold] text-2xl">Agam Srivastava</p>
                <hr className="w-[230px]"/>
                <a href='/profile'>
                    <p className="underline">Go to profile</p>
                </a>
            </div>
        </div>
    
    
    
    </>)
}

export default SmallProfile