/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Command } from '../commandManager';
import { MarkdownPreviewWebviewManager } from '../features/previewContentProvider';

export class RefreshPreviewCommand implements Command {
	public readonly id = 'markdown.refreshPreview';

	public constructor(
		private readonly webviewManager: MarkdownPreviewWebviewManager
	) { }

	public execute() {
		this.webviewManager.refresh();
	}
}