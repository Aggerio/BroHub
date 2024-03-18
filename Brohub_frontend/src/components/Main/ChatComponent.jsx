import * as React from "react";

function ChatComponent() {
  const messages = [
    {
      id: 1,
      name: "Hilamtue Jawara",
      message: "hope everyone is okay",
      time: "10:30",
    },
    {
      id: 2,
      name: "Bee Brown",
      message: "hope everyone is okay",
      time: "10:30",
    },
    {
      id: 3,
      name: "Annie Brown",
      message: "You: hope he walk today",
      time: "10:30",
    },
    {
      id: 4,
      name: "Young boiler",
      message: "i am done with it",
      time: "10:30",
    },
    {
      id: 5,
      name: "Pretty Brown",
      message: "hope everyone is okay",
      time: "10:30",
    },
    {
      id: 6,
      name: "Ben Brown",
      message: "okay",
      time: "10:30",
    },
  ];

  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-end px-20 pt-14 w-full bg-black max-md:px-5 max-md:max-w-full">
              <div className="justify-center items-start px-7 py-6 mr-8 ml-8 text-xl font-bold whitespace-nowrap bg-white border-2 border-solid border-stone-300 rounded-[30px] text-neutral-500 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                Search
              </div>
              <div className="flex flex-col items-start py-px mt-20 bg-black max-md:mt-10 max-md:mr-1 max-md:max-w-full">
                {messages.map((message) => (
                  <MessageItem key={message.id} message={message} />
                ))}
              </div>
            </div>
          </section>
          <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-8 pt-11 pb-4 w-full bg-black max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 justify-between mx-4 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-4">
                  <div className="flex overflow-hidden relative flex-col items-start px-16 pt-16 pb-0.5 rounded-full aspect-[1.01] w-[81px] max-md:pl-5">
                    <img
                      loading="lazy"
                      src=""
                      alt="Profile"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <div className="relative shrink-0 w-full h-3.5 bg-green-500 rounded-full border-2 border-white border-solid" />
                  </div>
                  <div className="flex flex-col my-auto text-white">
                    <div className="text-2xl font-bold tracking-normal">
                      Hilamtue W. Blamo
                    </div>
                    <div className="text-sm tracking-normal">Active Now</div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between items-start my-auto">
                  <img
                    loading="lazy"
                    src=""
                    alt="Phone icon"
                    className="shrink-0 mt-1.5 w-7 aspect-[1.12]"
                  />
                  <img
                    loading="lazy"
                    src=""
                    alt="Video icon"
                    className="shrink-0 mt-2 w-7 aspect-[1.16]"
                  />
                  <img
                    loading="lazy"
                    src=""
                    alt="Menu icon"
                    className="shrink-0 self-stretch aspect-[0.23] w-[7px]"
                  />
                </div>
              </div>
              <div className="flex gap-5 justify-between items-center text-xl tracking-normal whitespace-nowrap mt-[835px] text-stone-600 max-md:flex-wrap max-md:mt-10">
                <img
                  loading="lazy"
                  src=""
                  alt="Attachment icon"
                  className="shrink-0 self-stretch my-auto aspect-square w-[37px]"
                />
                <img
                  loading="lazy"
                  src=""
                  alt="Camera icon"
                  className="shrink-0 self-stretch my-auto aspect-square w-[37px]"
                />
                <form className="flex gap-5 justify-between self-stretch py-1.5 pr-3 pl-7 bg-white rounded-3xl max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
                  <label htmlFor="messageInput" className="sr-only">
                    Type your message
                  </label>
                  <input
                    type="text"
                    id="messageInput"
                    placeholder="Type..."
                    aria-label="Type your message"
                    className="my-auto"
                  />
                  <button type="submit" aria-label="Send message">
                    <img
                      loading="lazy"
                      src=""
                      alt="Send icon"
                      className="shrink-0 aspect-square w-[37px]"
                    />
                  </button>
                </form>
                <img
                  loading="lazy"
                  src=""
                  alt="Microphone icon"
                  className="shrink-0 self-stretch my-auto aspect-[1.06] w-[35px]"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function MessageItem({ message }) {
  return (
    <div className="flex flex-col justify-center items-start px-14 py-7 w-full bg-black max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-wrap">
        <div className="shrink-0 my-auto rounded-full bg-zinc-300 h-[71px] w-[71px]" />
        <div className="flex flex-wrap flex-auto gap-5 content-end items-start">
          <div className="flex flex-col grow shrink-0 self-start font-bold basis-0 w-fit">
            <h3 className="text-3xl text-white">{message.name}</h3>
            <p className="text-xl text-stone-50">{message.message}</p>
          </div>
          <time className="flex flex-col self-end mt-14 text-base whitespace-nowrap max-md:mt-10">
            <span className="text-stone-700">{message.time}</span>
            <span className="z-10 mt-0 text-zinc-50">{message.time}</span>
          </time>
        </div>
      </div>
    </div>
  );
}

export default ChatComponent;