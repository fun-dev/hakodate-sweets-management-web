export type SmallCategory = {
  id: number;
  large_category_id: number;
  name: string;
  created_at: string;
  updated_at: string;
};

export type LargeCategory = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};

// 大カテゴリが追加されたらここに追加する．
// 動的に編集できるようにする場合にはこの実装方法は適していない
export const LargeCategoryId = {
  JAPANESE: 1,
  WESTERN: 2,
  OTHER: 3,
} as const;
