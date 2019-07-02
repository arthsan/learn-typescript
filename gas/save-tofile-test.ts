export class SaveToFile {

  sum(a: number, b: number): number {
    // write below
    
    // write above
    if (typeof a !== 'number' || typeof b !== 'number') throw new Error('I want numberssssss...');

    return a + b;
  }

  doSum(args: string[]): number {
    const arg1 = +args[0].replace(',', '.');
    const arg2 = +args[1].replace(',', '.');
    return this.sum(arg1, arg2);
  }
}
