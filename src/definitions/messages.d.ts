// TODO: решить, что делать с выдачей от vk - conversations не выдает chatSettings о чатах pvp, надо:
//  либо делать интерфейсы под их объекты, (и возможно потом сохранять со всеми настройками, но зачем?..)
//  либо на входе допрашивать доп.инфу и сразу лепить нужное (это логичнее, но еще подумать)

interface ChatSettings {

}

interface Peer {

}

export interface Conversation extends ChatSettings, Peer {}
