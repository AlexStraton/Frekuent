const { DateTimeFormat, DateTimeFormatter, LocalDateTime } = JSJoda;
const { Locale } = JSJodaLocale;

const value = LocalDateTime
  .parse('2014-08-20 15:30:00',
    DateTimeFormatter.ofPattern('yyyy-M-d HH:mm:ss'))
  .format(DateTimeFormatter.ofPattern('MM/dd/yyyy h:mm a')
    .withLocale(Locale.UK));
