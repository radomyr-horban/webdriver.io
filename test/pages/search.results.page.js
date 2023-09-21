class SearchResultsPage {
  get repositoryTitles() {
    return $$('span[class="Text-sc-17v1xeu-0 qaOIC search-match"]')
  }
  async isRepositoryTitleRelevant(value) {
    await this.repositoryTitles.every((title) =>
      title.toHaveTextContaining(value)
    )
  }
}

export default new SearchResultsPage()
