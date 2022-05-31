import {
    IAppAccessors,
    IConfigurationExtend,
    ILogger,
} from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';
import { CodeEditorCommand } from './Commands/CodeEditorCommand';

export class CodeEditorApp extends App {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    public async extendConfiguration(configuration: IConfigurationExtend): Promise<void> {
        const codeEditorCommand : CodeEditorCommand = new CodeEditorCommand();
        await configuration.slashCommands.provideSlashCommand(codeEditorCommand);
    }
}
