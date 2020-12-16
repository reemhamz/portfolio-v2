<template>
  <div class="contact">
    <div class="contact__head">
      <h2>Contact</h2>
      <p>
        Want to connect or follow my dev journey online? Here are some of my
        socials. Feel free to hit me up! I'm also definitely open for some
        freelance.
      </p>
    </div>
    <div class="contact__socials">
        <ul>
            <li><span role="img" aria-label="angry cat">😾</span><span class="contact__type"> Github:</span> <a href="https://github.com/reemhamz" rel="noreferrer noopener"
              target="_blank">@reemhamz</a></li>
            <li><span role="img" aria-label="flamingo">🦩</span><span class="contact__type"> Twitter:</span> <a href="https://twitter.com/reemcodes" rel="noreferrer noopener"
              target="_blank"> @reemcodes</a></li>
            <li><span role="img" aria-label="">📨</span><span class="contact__type"> Email:</span> <a href="mailto:me@reemify.dev" target="_blank" rel="noopener" class="email">me@reemify.dev</a> <span class="sneaky-message">(psst, don't worry, clicking this won't annoyingly open your computer's default mail application)</span></li>
        </ul>
    </div>
  </div>
</template>

<script>
import mailgo from "mailgo";
export default {
created() {
    mailgo();
}
}
</script>

<style lang="scss" scoped>
.contact {
  margin: 80px;
  margin-bottom: 80px;
  h2 {
    color: $navy;
  }

  &__socials {
      margin-top: 20px;

      ul{
          list-style: none;

          li{
              .contact__type {
                  font-weight: bold;
              }
              .sneaky-message {
                  font-size: 0.7em;
                  
              }
          }
      }
  }

  @include max-width(900) {
      margin: 80px 0;
      padding: 15px;
  }
}
</style>