export class Speaker {
  static sayHiStatic(name: string): string {
    if (!name) return 'Hi, unknown person! STATIC';
    return `Hi, ${name}! STATIC`;
  }

  sayHiNonStatic(name: string): string {
    if (!name) return 'Hi, unknown person!';
    return `Hi, ${name}!`;
  }
}

interface IPessoa {
  name: string;
  age: number;
}
