const mysteryService = {

  async getMysteries() {
    try {
      const res = await fetch('/mysteries')
      return res.json()
    } catch(e) {
      console.error(e)
    }
  }
  
}

export default mysteryService