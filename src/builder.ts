// example 1

type Field = {
  type: string;
  fieldName: string;
};

class CodeBuilder {
  private className = "";
  private fields: Field[] = [];

  setClassName(className: string): CodeBuilder {
    this.className = className;
    return this;
  }

  addFields(field: Field) {
    this.fields.push(field);
    return this;
  }

  build(): string {
    let code = "";
    let newLine = "\n";
    let tap = "\t";

    if (this.className.length > 0) {
      code += `class ${this.className} {${newLine}`;
      this.fields.forEach((f) => {
        code += `${tap}${f.fieldName}: ${f.type}${newLine}`;
      });
      code += "}";

      return code;
    }

    return code;
  }
}

const code = new CodeBuilder()
  .setClassName("Person")
  .addFields({ fieldName: "name", type: "string" })
  .addFields({ fieldName: "age", type: "number" })
  .build();

console.log(code);

// example 2

// class Person {
//   name = "";
//   age = 0;
//   workPlace = "";
// }

// class PersonBuilder<SELF extends PersonBuilder<SELF>> {
//   protected person = new Person();

//   name(name: string): SELF {
//     this.person.name = name;
//     return this
//   }

//   age(age: number) {
//     this.person.age = age;
//     return this;
//   }

//   build() {
//     return this.person;
//   }
// }

// class EmployeeBuilder extends PersonBuilder<EmployeeBuilder> {
//   worksAt(place: string): EmployeeBuilder {
//     this.person.workPlace = place;
//     return this;
//   }

//   build(): Person {
//     return this.person;
//   }
// }

// new EmployeeBuilder().name("aot")
