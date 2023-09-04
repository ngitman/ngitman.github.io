<script>
</script>

<h1 class="text-4xl text-slate-950 pt-5">Send me a message!</h1>
<form action="/send_message.py" method="get" class="pt-5">
  <label class="text-2xl" for="name">Your Name (First and Last)</label><br />
  <input
    class="border-2 rounded"
    type="text"
    id="name"
    name="name"
    required
  /><br />
  <label class="text-2xl" for="message">Your Message</label><br />
  <textarea
    class="border-2 rounded"
    name="message"
    id="message"
    cols="60"
    rows="10"
    required
  /><br />
  <input class="text-2xl border-2 rounded bg-blue" type="submit" />
</form>
