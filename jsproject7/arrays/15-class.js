class productAlreadyExistsError extends Error {
  constructor(message) {
    super(message)
    this.code = "PoductExists"
  }
}


class ProductNotFoundError extends Error {
  constructor(message) {
    super(message)
    this.code = "ProductNotFound"
  }
}

try {
  throw ProductNotFoundError("Product not found")
} catch (error) {
  if (error instanceof ProductNotFoundError) {
    console.error("Product not exists. \n" + error.message, error.code)
  } else if (error instanceof ProductNotFoundError) {
    console.error("Product already exists.\n" + error.message, error.code)
  }
}