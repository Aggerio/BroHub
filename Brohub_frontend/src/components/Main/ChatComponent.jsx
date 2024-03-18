import React, { useState } from 'react';

function QuickChat() {
  
  const [activeCount, setActiveCount] = useState(4);
  const [archivedCount, setArchivedCount] = useState(7);

  // Dummy data 
  const activeConversations = [
    { id: 1, name: 'Henry Boyd' },
    { id: 2, name: 'Marta Curtis', unreadMessages: 2 },
    { id: 3, name: 'Philip Tucker' },
    { id: 4, name: 'Christine Reid' },
    { id: 5, name: 'Jerry Guzman' }
  ];

  const archivedConversations = [
    { id: 1, name: 'Henry Boyd' }
  ];

  return (
    <div className="h-full overflow-hidden flex items-center justify-center bg-gray-200 w-full">
      <div className="flex h-screen w-full antialiased text-gray-800">
        
        <div className="sidebar rounded-xl flex flex-col py-8 pl-6 pr-2 w-64 bg-[#f6f6f6] flex-shrink-0">
          
          <div className="flex flex-row items-center justify-center h-12 w-full">
            <div className="flex items-center justify-center rounded-2xl text-green-700 bg-green-300 h-10 w-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div className="ml-2 font-bold text-2xl">QuickChat</div>
          </div>
          {/* User Profile */}
          <div className="flex flex-col items-center bg-green-200 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
            <div className="h-20 w-20 rounded-full border overflow-hidden">
              <img src="/Frame10.png" alt="Avatar" className="h-full w-full" />
            </div>
            <div className="text-sm font-semibold mt-2">Agam Srivastava</div>
            <div className="text-xs text-gray-500">Traveller</div>
            <div className="flex flex-row items-center mt-3">
              <div className="flex flex-col justify-center h-4 w-8 bg-green-500 rounded-full">
                <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
              </div>
              <div className="leading-none ml-1 text-xs">Active</div>
            </div>
          </div>
          {/* Active Conversations */}
          <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center justify-between text-xs">
              <span className="font-bold">Active Conversations</span>
              <span className="flex items-center text-white font-semibold justify-center bg-green-600 h-4 w-4 rounded-full">{activeCount}</span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
              {activeConversations.map(conversation => (
                <button key={conversation.id} className="flex flex-row items-center hover:bg-green-100 rounded-xl p-2">
                  <div className={`flex items-center justify-center h-8 w-8 bg-${conversation.unreadMessages ? 'gray' : 'indigo'}-200 rounded-full`}>
                    {conversation.name.charAt(0)}
                  </div>
                  <div className="ml-2 text-sm font-semibold">{conversation.name}</div>
                  {conversation.unreadMessages && (
                    <div className="flex items-center justify-center ml-auto text-xs text-white bg-purple-500 h-4 w-4 rounded leading-none">{conversation.unreadMessages}</div>
                  )}
                </button>
              ))}
            </div>
            {/* Archived Conversations */}
            <div className="flex flex-row items-center justify-between text-xs mt-6">
              <span className="font-bold">Archived</span>
              <span className="flex items-center justify-center bg-purple-500 text-white h-4 w-4 rounded-full">{archivedCount}</span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2">
              {archivedConversations.map(conversation => (
                <button key={conversation.id} className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                  <div className={`flex items-center justify-center h-8 w-8 bg-green-200 rounded-full`}>
                    {conversation.name.charAt(0)}
                  </div>
                  <div className="ml-2 text-sm font-semibold">{conversation.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-auto h-full p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            {/* Chat Messages */}
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              {/* Chat Messages Go Here */}
            </div>
            {/* Chat Input */}
            <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
              <div>
                <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
              </div>
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <input type="text" className="flex w-full border rounded-xl focus:outline-none focus:border-green-400 pl-4 h-10" />
                  <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-green-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="ml-4">
                <button className="flex items-center justify-center bg-green-500 hover:bg-green-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                  <span>Send</span>
                  <span className="ml-2">
                    <svg className="w-4 h-4 transform rotate-45 -mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickChat;
