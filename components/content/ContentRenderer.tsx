import Link from 'next/link';
import { ContentSection, TableData, CodeData, InfoBoxData, CTAData, QuizData } from '@/types';
import { InfoBox } from './InfoBox';
import { InlineCTA } from '@/components/conversion/InlineCTA';
import { InteractiveQuiz } from './InteractiveQuiz';

interface ContentRendererProps {
  content: ContentSection[];
}

function renderTextWithLinks(text: string): React.ReactNode {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, linkText, href] = match;
    const isInternal = href.startsWith('/');
    if (isInternal) {
      parts.push(
        <Link key={match.index} href={href} className="text-primary hover:underline">
          {linkText}
        </Link>
      );
    } else {
      parts.push(
        <a key={match.index} href={href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : parts;
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export function ContentRenderer({ content }: ContentRendererProps) {
  return (
    <>
      {content.map((section, index) => {
        switch (section.type) {
          case 'text':
            return (
              <p key={index} className="mb-4">
                {renderTextWithLinks(section.content as string)}
              </p>
            );

          case 'heading': {
            const text = section.content as string;
            const id = slugifyHeading(text);
            const Tag = `h${section.level || 2}` as keyof JSX.IntrinsicElements;
            return (
              <Tag key={index} id={id} className="scroll-mt-20">
                {text}
              </Tag>
            );
          }

          case 'list':
            return (
              <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
                {(section.content as string[]).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );

          case 'table': {
            const tableData = section.content as TableData;
            return (
              <div key={index} className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      {tableData.headers.map((header, i) => (
                        <th
                          key={i}
                          className="border border-border bg-muted px-4 py-2 text-left font-semibold"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-border px-4 py-2"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }

          case 'code': {
            const codeData = section.content as CodeData;
            return (
              <div key={index} className="code-block my-6">
                {codeData.filename && (
                  <div className="bg-muted px-4 py-2 text-sm font-mono border-b border-border rounded-t-lg">
                    {codeData.filename}
                  </div>
                )}
                <pre className={`bg-slate-900 text-slate-50 ${codeData.filename ? 'rounded-b-lg' : 'rounded-lg'}`}>
                  <code className={`language-${codeData.language}`}>
                    {codeData.code}
                  </code>
                </pre>
              </div>
            );
          }

          case 'quote':
            return (
              <blockquote key={index} className="border-l-4 border-primary pl-4 italic my-6">
                {section.content as string}
              </blockquote>
            );

          case 'infobox': {
            const infoData = section.content as InfoBoxData;
            return (
              <InfoBox key={index} type={infoData.type} title={infoData.title}>
                {infoData.content}
              </InfoBox>
            );
          }

          case 'protip': {
            const tipData = section.content as InfoBoxData;
            return (
              <InfoBox key={index} type="tip" title={tipData.title || 'Pro Tip'}>
                {tipData.content}
              </InfoBox>
            );
          }

          case 'cta': {
            const ctaData = section.content as CTAData;
            return (
              <InlineCTA
                key={index}
                title={ctaData.title}
                description={ctaData.description}
                buttonText={ctaData.buttonText}
                buttonLink={ctaData.buttonLink}
                variant={ctaData.variant}
              />
            );
          }

          case 'quiz': {
            const quizData = section.content as QuizData;
            return (
              <InteractiveQuiz
                key={index}
                title={quizData.title}
                questions={quizData.questions}
              />
            );
          }

          default:
            return null;
        }
      })}
    </>
  );
}
