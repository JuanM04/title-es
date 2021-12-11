/**
 * Este paquete escribe correctamente los títulos en mayúsculas según The Chicago Manual of Style.
 * Además, todos los nombres de los productos de Vercel también se escriben correctamente en mayúsculas.
 */
declare function title(string: string, options?: title.Options): string;

declare namespace title {
  interface Options {
    /**
     * @default undefined
     */
    special?: string[] | undefined;
  }
}

export = title;
