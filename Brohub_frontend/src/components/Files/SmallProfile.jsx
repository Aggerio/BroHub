const SmallProfile=()=>{


    return(<>
    <div>
        <p className="profile-pic fixed border rounded-[100px] border-solid border-[#2ED29D] right-[250px] top-[290px]">Profile-pic</p>
    </div>
        <div className="small-profile">
            <div className="cover-image w-full h-[180px] flex items-center justify-center rounded-[20px]">
                <p>Image1</p>
            </div>
            <div className="pr-pic flex flex-col items-center justify-center pt-[120px]">
                <p className="name font-[bold] text-2xl">K Gourav</p>
                <hr className="w-[230px]"/>
                <p>Go to profile</p>
            </div>
        </div>
    
    
    
    </>)
}

export default SmallProfile