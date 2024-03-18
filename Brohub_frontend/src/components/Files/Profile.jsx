import * as React from "react";

function Profile() {
    return (
        <>
            <img
                loading="lazy"
                src={'/Frame31.png'}
                alt="Profile cover"
                className="self-stretch w-full aspect-[2.86] max-md:max-w-full"
            />
            <h1 className="mt-7 text-5xl font-medium text-center text-black max-md:text-4xl">
                Agam Srivastava
            </h1>
            <div className="flex gap-5 justify-between items-start pr-5 text-lg text-center text-neutral-500">
                <div className="mt-5">48 yo</div>
                <div className="self-stretch text-4xl">.</div>
                <div className="mt-5">VIT Vellore</div>
            </div>
            <div className="flex gap-5 justify-between px-5 mt-5 max-w-full text-4xl text-center whitespace-nowrap text-neutral-950 w-[455px] max-md:flex-wrap">
                <span>218</span>
                <span>98</span>
                <span>2</span>
            </div>
            <div className="flex gap-5 justify-between px-5 max-w-full text-2xl text-center text-black w-[589px] max-md:flex-wrap">
                <div className="justify-center px-12 py-4 whitespace-nowrap rounded-3xl border-4 border-lime-300 border-dashed max-md:px-5">
                    <p>Friends</p>
                </div>
                <div className="justify-center px-9 pt-4 pb-2.5 rounded-3xl border-4 border-lime-300 border-dashed max-md:px-5">
                    <p>Groups in</p>
                </div>
                <div className="justify-center px-14 py-4 whitespace-nowrap rounded-3xl border-4 border-lime-300 border-dashed max-md:px-5">
                    <p>Posts</p>
                </div>
            </div>
        </>
    );
}
export default Profile;
