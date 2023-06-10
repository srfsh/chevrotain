export class BaseRegExpVisitor {
  protected visitChildren(node) {
    for (const key in node) {
      const child = node[key]
      /* istanbul ignore else */
      if (node.hasOwnProperty(key)) {
        if (child.type !== undefined) {
          this.visit(child)
        } else if (Array.isArray(child)) {
          child.forEach(function (subChild) {
            this.visit(subChild)
          }, this)
        }
      }
    }
  }

  protected visit(node) {
    switch (node.type) {
      case "Pattern":
        this.visitPattern(node)
        break
      case "Flags":
        this.visitFlags(node)
        break
      case "Disjunction":
        this.visitDisjunction(node)
        break
      case "Alternative":
        this.visitAlternative(node)
        break
      case "StartAnchor":
        this.visitStartAnchor(node)
        break
      case "EndAnchor":
        this.visitEndAnchor(node)
        break
      case "WordBoundary":
        this.visitWordBoundary(node)
        break
      case "NonWordBoundary":
        this.visitNonWordBoundary(node)
        break
      case "Lookahead":
        this.visitLookahead(node)
        break
      case "NegativeLookahead":
        this.visitNegativeLookahead(node)
        break
      case "Character":
        this.visitCharacter(node)
        break
      case "Set":
        this.visitSet(node)
        break
      case "Group":
        this.visitGroup(node)
        break
      case "GroupBackReference":
        this.visitGroupBackReference(node)
        break
      case "Quantifier":
        this.visitQuantifier(node)
        break
    }

    this.visitChildren(node)
  }

  protected visitPattern(node) {}

  protected visitFlags(node) {}

  protected visitDisjunction(node) {}

  protected visitAlternative(node) {}

  // Assertion
  protected visitStartAnchor(node) {}

  protected visitEndAnchor(node) {}

  protected visitWordBoundary(node) {}

  protected visitNonWordBoundary(node) {}

  protected visitLookahead(node) {}

  protected visitNegativeLookahead(node) {}

  // atoms
  protected visitCharacter(node) {}

  protected visitSet(node) {}

  protected visitGroup(node) {}

  protected visitGroupBackReference(node) {}

  protected visitQuantifier(node) {}
}
