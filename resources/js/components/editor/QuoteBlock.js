import Quill from 'quill'

let Container = Quill.import('blots/container');
let Block = Quill.import('blots/block');
let TextBlot = Quill.import('blots/text');
let Break = Quill.import('blots/break');
let Cursor = Quill.import('blots/cursor');

export class QuoteBlockContainer extends Container {
    static create(value) {
        const domNode = super.create(value);
        domNode.setAttribute('spellcheck', true);
        return domNode;
    }

    html(index, length) {
        const text = this.children
            .map(child => child.domNode.innerText)
            .join('\n')
            .slice(index, index + length);
        return `<blockquote>${text}</blockquote>`;
    }
}

export class QuoteBlot extends Block {
    static register() {
        Quill.register(QuoteBlockContainer);
    }
}

QuoteBlot.blotName = 'quote';
QuoteBlot.tagName = 'blockquote';
QuoteBlot.allowedChildren = [TextBlot, Break, Cursor];
QuoteBlot.requiredContainer = QuoteBlockContainer;
QuoteBlot.TAB = '  ';

QuoteBlockContainer.blotName = 'quote-container';
QuoteBlockContainer.tagName = 'div';
QuoteBlockContainer.allowedChildren = [QuoteBlot];
