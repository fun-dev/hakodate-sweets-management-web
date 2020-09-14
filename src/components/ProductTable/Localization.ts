import { Localization } from 'material-table';

export const localization: Localization = {
  pagination: {
    labelDisplayedRows: '{from}-{to}件 / {count}件',
    labelRowsSelect: '件/ページ',
    firstTooltip: '最初のページ',
    previousTooltip: '前のページ',
    nextTooltip: '次のページ',
    lastTooltip: '最後のページ',
  },
  toolbar: {
    nRowsSelected: '{0} row(s) selected',
    searchTooltip: '検索',
    searchPlaceholder: '検索',
  },
  header: {
    actions: '編集',
  },
  body: {
    emptyDataSourceMessage: '表示可能な商品はありません。',
    filterRow: {
      filterTooltip: 'Filter',
    },
    editRow: {
      cancelTooltip: 'キャンセル',
      saveTooltip: '保存',
    },
  },
};
