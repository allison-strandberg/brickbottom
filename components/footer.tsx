export default function Footer() {
  return (
    <>
      <footer className="flex justify-center w-full p-8 font-josefin bg-gray-700">
        <div className="w-1/2 flex justify-around">
          <a
            className="flex items-center text-base md:text-xl bg-gray-600 p-2 rounded-sm transition duration-300 hover:bg-gray-500"
            href="https://brickbottom.org/"
            target="_blank"
          >
            brickbottom.org
          </a>
          <form action="https://www.paypal.com/donate" method="post" target="_top" className="bg-gray-600 rounded-sm transition duration-300 hover:bg-gray-500">
            <input type="hidden" name="hosted_button_id" value="4ZE5WWVVMRQHQ" />
            <input
              className="pt-2"
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
          </form>
        </div>
      </footer>
    </>
  );
}
