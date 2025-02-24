// Coordinate interface declared for later use
interface Coordinate {
  x: number;
  y: number;
}

// functions below highlight what might seem like TypeScript's prescriptive nature forcing us to write procedural code
function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return {
    ...obj,
  };
}
function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
  return {
    x,
    y,
  };
}

// a more scalable function declaration below using FUNCTION OVERLOADING
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === "string") {
    (arg1 as string).split(',').forEach(str => {
      const [key, value] = str.split(':');
      coord[key as "x" | "y"] = parseInt(value, 10);
    })
  } else if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 2, y: 32 }));
console.log(parseCoordinate("y:4,x:6"))
