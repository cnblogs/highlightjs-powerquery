export default function (hljs) {
  return {
    aliases: ['M', 'powerquery', 'power-query', 'mscript', 'pq'],
    contains: [
      {
        scope: 'comment',
        match: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/g,
        relevance: 0,
      },
      {
        scope: 'number',
        match: /\b0x[\da-f]+\b|(?:[+-]?(?:\b\d+\.)?\b\d+|[+-]\.\d+|(^|[^.])\B\.\d+)(?:e[+-]?\d+)?\b/i,
        relevance: 0,
      },
      {
        scope: 'keyword',
        match:
          /\b(?:and|as|each|else|error|if|in|is|let|meta|not|nullable|optional|or|otherwise|section|shared|then|try|type)\b|#(?:binary|date|datetime|datetimezone|duration|infinity|nan|sections|shared|table|time)\b/,
        relevance: 0,
      },
      {
        scope: 'punctuation',
        match: /[,;\[\](){}]/,
        relevance: 0,
      },
      {
        scope: 'type',
        match:
          /\b(?:any|anynonnull|binary|date|datetime|datetimezone|duration|function|list|logical|none|number|record|table|text|time)\b/,
        relevance: 0,
      },
      {
        scope: 'title.function',
        match: /(^|[^#\w.])[a-z_][\w.]*(?=\s*\()/i,
      },
      {
        scope: 'literal',
        match: /\b(?:false|true)\b/,
      },
      {
        scope: 'string',
        match: /(?:#!)?"(?:[^"\r\n]|"")*"(?!")/g,
      },
      { scope: 'operator', match: /[-+*\/&?@^]|<(?:=>?|>)?|>=?|=>?|\.\.\.?/ },
      {
        scope: 'variable.constant',
        relevance: 0,
        match: /\bDay\.(?:Friday|Monday|Saturday|Sunday|Thursday|Tuesday|Wednesday)\b/,
      },
      {
        scope: 'variable.constant',
        relevance: 0,
        match: /\bTraceLevel\.(?:Critical|Error|Information|Verbose|Warning)\b/,
      },
      { scope: 'variable.constant', relevance: 0, match: /\bOccurrence\.(?:All|First|Last)\b/ },
      { scope: 'variable.constant', relevance: 0, match: /\bOrder\.(?:Ascending|Descending)\b/ },
      {
        scope: 'variable.constant',
        relevance: 0,
        match: /\bRoundingMode\.(?:AwayFromZero|Down|ToEven|TowardZero|Up)\b/,
      },
      { scope: 'variable.constant', relevance: 0, match: /\bMissingField\.(?:Error|Ignore|UseNull)\b/ },
      { scope: 'variable.constant', relevance: 0, match: /\bQuoteStyle\.(?:Csv|None)\b/ },
      {
        scope: 'variable.constant',
        relevance: 0,
        match: /\bJoinKind\.(?:FullOuter|Inner|LeftAnti|LeftOuter|RightAnti|RightOuter)\b/,
      },
      { scope: 'variable.constant', relevance: 0, match: /\bGroupKind\.(?:Global|Local)\b/ },
      { scope: 'variable.constant', relevance: 0, match: /\bExtraValues\.(?:Error|Ignore|List)\b/ },
      {
        scope: 'variable.constant',
        relevance: 0,
        match: /\bJoinAlgorithm\.(?:Dynamic|LeftHash|LeftIndex|PairwiseHash|RightHash|RightIndex|SortMerge)\b/,
      },
      { scope: 'variable.constant', relevance: 0, match: /\bJoinSide\.(?:Left|Right)\b/ },
      { scope: 'variable.constant', relevance: 0, match: /\bPrecision\.(?:Decimal|Double)\b/ },
      { scope: 'variable.constant', relevance: 0, match: /\bRelativePosition\.From(?:End|Start)\b/ },
      {
        scope: 'variable.constant',
        relevance: 0,
        match: /\bTextEncoding\.(?:Ascii|BigEndianUnicode|Unicode|Utf16|Utf8|Windows)\b/,
      },
      {
        scope: 'variable.constant',
        relevance: 0,
        match:
          /\b(?:Any|Binary|Date|DateTime|DateTimeZone|Duration|Function|Int16|Int32|Int64|Int8|List|Logical|None|Number|Record|Table|Text|Time)\.Type\b/,
      },
      { scope: 'variable.constant', relevance: 0, match: /\bnull\b/ },
    ],
  };
}
