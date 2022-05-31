import { IRead, IModify, IHttp, IPersistence } from "@rocket.chat/apps-engine/definition/accessors";
import {
    ISlashCommand,
    SlashCommandContext,
} from "@rocket.chat/apps-engine/definition/slashcommands";
import { IUser } from "@rocket.chat/apps-engine/definition/users";
import { IMessage } from "@rocket.chat/apps-engine/definition/messages";
import { IRoom } from "@rocket.chat/apps-engine/definition/rooms";
import { IModifyCreator, IMessageBuilder } from "@rocket.chat/apps-engine/definition/accessors";

export class CodeEditorCommand implements ISlashCommand {

    public command: string = 'code';
    public i18nDescription: string = "Code Preview";
    public providesPreview: boolean = false;
    public i18nParamsExample: string= "Code Preview";

    public async executor(context: SlashCommandContext, read: IRead, modify: IModify, http: IHttp, persis: IPersistence): Promise<void> {
        const command = context.getArguments();
        console.log(command);
        const creator: IModifyCreator = modify.getCreator();
        const room: IRoom = context.getRoom();
        const sender : IUser =( await read.getUserReader().getAppUser()) as IUser;

        const messageTemplate: IMessage = {
            text: 'Code Editor',
            sender,
            room
          }
        const messageBuilder: IMessageBuilder = creator.startMessage(messageTemplate);
        await creator.finish(messageBuilder);

    }
}
