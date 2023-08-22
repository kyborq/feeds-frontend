export type TCombine = string | boolean | null | undefined;

export const combine = (...args: TCombine[]) => {
  return args.filter(Boolean).join(" ");
};
