import Footer from '../components/footer'
import { BLOG_NAME, BLOG_URL } from '../lib/constants'

export default function Buymeacoffe() {
  return (
    <main>
      <div className="mt-28 min-h-screen container mx-auto px-4">
          <title>BlogFriends Doação</title>
          <h1 className="text-4xl font-bold">Hey 👋</h1>
          <p className="text-base text-gray-600 uppercase font-bold">Ajude-nos a manter esse projeto! Sua contribuição é MUITO importante! Obrigado!</p>
          <br></br>
          <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="MDF3AP53UHN74" />
            <input type="image" src="https://www.paypalobjects.com/pt_BR/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/pt_BR/i/scr/pixel.gif" width="1" height="1" />
          </form>
      </div>
    </main>
  )
}