export function formatDate (time) {
  this.filter('moment', function(date, format) {
    if (!date) {
      return 'N/A'
    }
    return moment(date, 'YYYY-MM-DD').format(format)
  })
}
