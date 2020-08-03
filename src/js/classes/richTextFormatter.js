import { BbcodeRichTextFormatter } from './richTextFormatterBbcode';
import { HtmlRichTextFormatter } from './richTextFormatterHtml';
import { StaxelRichTextFormatter } from './richTextFormatterStaxel';

export const RichTextFormatter = function(app) {
  const type = app.settings.markupLanguage();

  if (type == 'staxel')
    return new StaxelRichTextFormatter(app);
  return type === 'html' ?
    new HtmlRichTextFormatter(app) :
    new BbcodeRichTextFormatter(app);
};
