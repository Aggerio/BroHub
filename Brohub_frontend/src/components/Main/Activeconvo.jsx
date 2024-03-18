import React from 'react'

const Activeconvo = () => {
  return (
    <div>
         {/* Active Conversations */}
         <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center justify-between text-xs">
              <span className="font-bold">Active Conversations</span>
              <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">{activeCount}</span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
              {activeConversations.map(conversation => (
                <button key={conversation.id} className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                  <div className={`flex items-center justify-center h-8 w-8 bg-${conversation.unreadMessages ? 'gray' : 'indigo'}-200 rounded-full`}>
                    {conversation.name.charAt(0)}
                  </div>
                  <div className="ml-2 text-sm font-semibold">{conversation.name}</div>
                  {conversation.unreadMessages && (
                    <div className="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">{conversation.unreadMessages}</div>
                  )}
                </button>
              ))}
            </div>
            {/* Archived Conversations */}
            <div className="flex flex-row items-center justify-between text-xs mt-6">
              <span className="font-bold">Archived</span>
              <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">{archivedCount}</span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2">
              {archivedConversations.map(conversation => (
                <button key={conversation.id} className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                  <div className={`flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full`}>
                    {conversation.name.charAt(0)}
                  </div>
                  <div className="ml-2 text-sm font-semibold">{conversation.name}</div>
                </button>
              ))}
            </div>
          </div>
    </div>
  )
}

export default Activeconvo