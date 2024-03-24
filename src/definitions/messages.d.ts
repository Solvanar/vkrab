// TODO: conversations не выдает chatSettings о чатах pvp, привести к общему знаменателю
interface ChatSettings {

}

interface Peer {

}

export interface Conversation extends ChatSettings, Peer {}
