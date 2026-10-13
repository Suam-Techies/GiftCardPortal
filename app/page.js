export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://giftcardportal.vip/#website",
        "url": "https://giftcardportal.vip/",
        "name": "GiftCardPortal",
        "description":
          "Independent educational guides to prepaid gift card balances, activation and usage.",
        "inLanguage": "en-US",
      },
      {
        "@type": "Organization",
        "@id": "https://giftcardportal.vip/#organization",
        "name": "GiftCardPortal",
        "url": "https://giftcardportal.vip/",
        "description":
          "Independent publisher of educational prepaid gift card information.",
      },
      {
        "@type": "WebPage",
        "@id": "https://giftcardportal.vip/#webpage",
        "url": "https://giftcardportal.vip/",
        "name": "GiftCardMall/MyGift | Check Your Balance | Activate Card",
        "description":
          "Check out GiftCardMall/Mygift card balance, activation guidance, Visa repayment fundamentals and useful response to common prepaid gift card inquiries.",
        "isPartOf": {
          "@id": "https://giftcardportal.vip/#website",
        },
        "about": [
          {
            "@type": "Thing",
            "name": "GiftCardMall/Mygift",
          },
          {
            "@type": "Thing",
            "name": "Prepaid gift card balance",
          },
          {
            "@type": "Thing",
            "name": "Gift card activation",
          },
          {
            "@type": "Thing",
            "name": "Prepaid Visa cards",
          },
        ],
        "inLanguage": "en-US",
      },
      {
        "@type": "Article",
        "@id": "https://giftcardportal.vip/#article",
        "headline": "GiftCardMall/MyGift | Check Your Balance | Activate Card",
        "description":
          "Check out GiftCardMall/Mygift card balance, activation guidance, Visa repayment fundamentals and useful response to common prepaid gift card inquiries.",
        "mainEntityOfPage": {
          "@id": "https://giftcardportal.vip/#webpage",
        },
        "author": {
          "@type": "Organization",
          "name": "GiftCardPortal",
        },
        "publisher": {
          "@id": "https://giftcardportal.vip/#organization",
        },
        "inLanguage": "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://giftcardportal.vip/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://giftcardportal.vip/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Gift Card Guide",
            "item": "https://giftcardportal.vip/",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="header">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="GiftCardPortal home">
            <span className="brand-icon">G</span>
            <span>GiftCardPortal</span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#guide">Overview</a>
            <a href="#balance">Balance</a>
            <a href="#activation">Activation</a>
            <a href="#visa">Visa Usage</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <div id="top"></div>

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">Prepaid Card Learning Center</div>

              <h1>
                Your Practical Guide to <span>GiftCardMall/Mygift</span>
              </h1>

              <p className="hero-copy">
                Learn how prepaid gift card balances work, where to find
                card-specific instructions, what activation can involve and why
                some online transactions may not succeed. This guide organizes
                common questions into clear, practical answers.
              </p>

              <div className="actions">
                <a className="btn btn-primary" href="#balance">
                  Understand Your Balance
                </a>
                <a className="btn btn-secondary" href="#faq">
                  Browse Questions
                </a>
              </div>
            </div>

            <aside className="hero-card">
              <div className="card-label">A useful starting point</div>
              <h2>Before checking a card balance</h2>

              <div className="mini-answer">
                <strong>Locate the original instructions</strong>
                <p>
                  Review the back of the card, its packaging or the issuer&apos;s
                  documentation to identify the appropriate servicing method.
                </p>
              </div>

              <div className="mini-answer">
                <strong>Protect your payment details</strong>
                <p>
                  Verify the web address before entering information. This
                  independent guide never needs your full card number, PIN or
                  CVV.
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* NOTICE BANNER */}
        <div className="notice">
          <div className="container notice-inner">
            <div className="notice-icon">!</div>
            <p>
              <strong>Independent resource:</strong> GiftCardPortal is not the
              official GiftCardMall or MyGift website and is not affiliated with
              Blackhawk Network, Visa, Mastercard, American Express, a bank,
              retailer or individual card issuer. Always follow the instructions
              supplied with your specific card.
            </p>
          </div>
        </div>

        {/* GUIDE / OVERVIEW SECTION */}
        <section id="guide">
          <div className="container">
            <div className="section-heading">
              <div className="kicker">The essentials</div>
              <h2>What should you know about prepaid gift cards?</h2>
              <p>
                Most card-related searches fall into a few practical categories:
                checking available value, activating a card, understanding
                payment acceptance and resolving transaction errors. Knowing
                which question you need answered can make the process simpler.
              </p>
            </div>

            <div className="answer-box">
              <span className="label">Quick explanation</span>
              <p>
                GiftCardMall/Mygift searches generally relate to prepaid gift
                card information. The correct process for checking a balance or
                managing a card depends on the card program and the instructions
                provided by its issuer.
              </p>
            </div>

            <div className="grid-3">
              <article className="info-card">
                <div className="icon-box">01</div>
                <h3>Balance awareness</h3>
                <p>
                  Understand available value and how purchases, authorizations or
                  refunds can affect the amount displayed.
                </p>
              </article>

              <article className="info-card">
                <div className="icon-box">02</div>
                <h3>Activation basics</h3>
                <p>
                  Learn where to find activation instructions and why
                  requirements can differ between card programs.
                </p>
              </article>

              <article className="info-card">
                <div className="icon-box">03</div>
                <h3>Payment troubleshooting</h3>
                <p>
                  Review common causes of declined transactions and practical
                  ways to identify the next step.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* BALANCE SECTION */}
        <section id="balance" className="soft-section">
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Balance information</div>
              <h2>How to check a giftcardmall balance safely</h2>
              <p>
                A balance check helps you understand the value available before
                making another purchase. The balance displayed may reflect recent
                card activity rather than the original amount loaded onto the
                card.
              </p>
            </div>

            <div className="answer-box">
              <span className="label">Direct answer</span>
              <p>
                To check a <strong>giftcardmall balance</strong>, start with the
                website or contact details identified on the card or original
                packaging. Verify the address independently before entering any
                sensitive payment information.
              </p>
            </div>

            <div className="steps">
              <div className="step">
                <div className="step-num">1</div>
                <div>
                  <h3>Read the card information</h3>
                  <p>
                    Look for the designated balance-check instructions, customer
                    support details and any program-specific terms.
                  </p>
                </div>
              </div>

              <div className="step">
                <div className="step-num">2</div>
                <div>
                  <h3>Verify the website address</h3>
                  <p>
                    Carefully check the domain and avoid unexpected links that
                    ask you to provide private card credentials.
                  </p>
                </div>
              </div>

              <div className="step">
                <div className="step-num">3</div>
                <div>
                  <h3>Review recent card activity</h3>
                  <p>
                    Pending authorizations, purchases and refunds can affect the
                    available amount or when an adjustment appears.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BALANCE TERMINOLOGY */}
        <section>
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Balance terminology</div>
              <h2>Understanding GiftCardMall/Mygift balance</h2>
              <p>
                The combined phrase is often used by people trying to identify
                the available value on a prepaid card and determine which
                instructions apply to it.
              </p>
            </div>

            <div className="grid-2">
              <article className="info-card">
                <h3>Available balance</h3>
                <p>
                  The available balance is the amount currently available for
                  eligible transactions under the card&apos;s rules. It may be
                  lower than the initial loaded value after spending.
                </p>
              </article>

              <article className="info-card">
                <h3>Pending transactions</h3>
                <p>
                  A merchant may place a temporary authorization before a
                  payment is finalized. The amount available can therefore
                  differ from a simple total of completed purchases.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* BRAND CONTEXT */}
        <section>
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Brand and search context</div>
              <h2>What does giftcardmall refer to?</h2>
              <p>
                A broad search can reflect different needs, from general gift
                card information to activation instructions and payment support.
                Not every page that mentions a card name is an official servicing
                destination.
              </p>
            </div>

            <div className="grid-3">
              <article className="info-card">
                <h3>Card information</h3>
                <p>
                  Review the documentation supplied with your card to understand
                  the applicable terms and features.
                </p>
              </article>

              <article className="info-card">
                <h3>Balance and activity</h3>
                <p>
                  Understand the difference between the original card value,
                  completed purchases and temporary authorizations.
                </p>
              </article>

              <article className="info-card">
                <h3>Support options</h3>
                <p>
                  Use the issuer&apos;s own support details when you need help
                  with a particular card or transaction.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ADDRESS VERIFICATION */}
        <section className="soft-section">
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Address verification</div>
              <h2>Searching for www.giftcardmall.com mygift</h2>
              <p>
                Some users search for a complete web address because they want to
                reach a particular card-related service.
              </p>
            </div>

            <div className="answer-box">
              <span className="label">Before you continue</span>
              <p>
                If you search for <strong>www.giftcardmall.com mygift</strong>,
                compare the destination with the instructions printed on your
                card or packaging. A search result or advertisement should not
                be treated as proof that a page is the correct official
                destination for your specific card.
              </p>
            </div>

            <div className="grid-3">
              <article className="info-card">
                <h3>Inspect the domain</h3>
                <p>
                  Look for misspellings, unexpected subdomains or additional
                  words that change the address.
                </p>
              </article>

              <article className="info-card">
                <h3>Be cautious with messages</h3>
                <p>
                  Unexpected texts or emails requesting card details should be
                  treated carefully, even when they use familiar wording.
                </p>
              </article>

              <article className="info-card">
                <h3>Use original documentation</h3>
                <p>
                  The card&apos;s own instructions are the best starting point for
                  identifying its designated servicing channel.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ACTIVATION SECTION */}
        <section id="activation">
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Activation basics</div>
              <h2>How prepaid gift card activation works</h2>
              <p>
                Activation requirements vary. Some cards are activated at
                purchase, while others may require the cardholder to follow
                additional instructions before use.
              </p>
            </div>

            <div className="grid-2">
              <article className="info-card">
                <h3>Check activation status</h3>
                <p>
                  Review the purchase receipt, card packaging and instructions to
                  determine whether activation was completed or another step is
                  required.
                </p>
              </article>

              <article className="info-card">
                <h3>Follow the correct process</h3>
                <p>
                  Use the activation information supplied for your card. Do not
                  enter payment credentials on an unrelated website simply
                  because it mentions the same card name.
                </p>
              </article>
            </div>

            <div className="answer-box" style={{ marginTop: "20px" }}>
              <span className="label">Practical tip</span>
              <p>
                If the card does not work after following its instructions,
                contact the issuer or customer support provider listed on the
                card materials. Keep the purchase receipt if available.
              </p>
            </div>
          </div>
        </section>

        {/* VISA USAGE SECTION */}
        <section id="visa" className="soft-section">
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Payment network basics</div>
              <h2>What does giftcardmall/mygift visa mean?</h2>
              <p>
                Searches containing the word Visa may relate to prepaid cards
                that use the Visa payment network. A payment network alone does
                not guarantee that every merchant or transaction type will be
                supported.
              </p>
            </div>

            <div className="answer-box">
              <span className="label">Direct answer</span>
              <p>
                The phrase <strong>giftcardmall/mygift visa</strong> may refer to
                a Visa-branded prepaid gift card. Whether it works for a specific
                purchase depends on the card&apos;s terms, the merchant&apos;s
                acceptance rules, the available balance and the type of
                transaction.
              </p>
            </div>

            <div className="grid-3">
              <article className="info-card">
                <h3>Merchant acceptance</h3>
                <p>
                  Confirm that the store accepts the applicable payment network
                  and prepaid card type.
                </p>
              </article>

              <article className="info-card">
                <h3>Correct payment details</h3>
                <p>
                  Follow the issuer&apos;s guidance for billing information and
                  other details required by the merchant.
                </p>
              </article>

              <article className="info-card">
                <h3>Transaction restrictions</h3>
                <p>
                  Some cards have restrictions on international, recurring or
                  other specialized transactions.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* RELATED SEARCHES */}
        <section>
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Related searches</div>
              <h2>Understanding mygift giftcardmall queries</h2>
              <p>
                Combining card names in a search often means that a visitor wants
                a specific answer about balance, activation or card use.
                Identifying the intended task makes the next step clearer.
              </p>
            </div>

            <div className="grid-2">
              <article className="info-card">
                <h3>Why people use this phrase</h3>
                <p>
                  A search for <strong>mygift giftcardmall</strong> may indicate
                  an attempt to find card information, balance guidance or help
                  with an online transaction.
                </p>
              </article>

              <article className="info-card">
                <h3>Where to begin</h3>
                <p>
                  Start with the physical card and its documentation. Those
                  materials can help identify the applicable issuer, servicing
                  instructions and card-specific conditions.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* PAYMENT TROUBLESHOOTING */}
        <section>
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Payment troubleshooting</div>
              <h2>Why might a prepaid card be declined?</h2>
              <p>
                A declined purchase can have several causes. Checking the
                available balance is a useful first step, but it may not explain
                every payment error.
              </p>
            </div>

            <div className="grid-2">
              <article className="info-card">
                <h3>Common causes</h3>
                <ul>
                  <li>Insufficient available funds</li>
                  <li>Merchant or transaction restrictions</li>
                  <li>Incorrect payment details</li>
                  <li>Activation not completed</li>
                  <li>Temporary authorization holds</li>
                  <li>Card expiration or other card-specific limits</li>
                </ul>
              </article>

              <article className="info-card">
                <h3>Steps to consider</h3>
                <ul>
                  <li>Review the current balance.</li>
                  <li>Confirm that the merchant accepts the card.</li>
                  <li>Check the transaction details.</li>
                  <li>Review the card&apos;s instructions.</li>
                  <li>Contact the issuer if the problem persists.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* CARDHOLDER SAFETY */}
        <section className="soft-section">
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Cardholder safety</div>
              <h2>Keep your gift card details private</h2>
              <p>
                Prepaid card information can represent monetary value. Protect
                card credentials and verify the destination before sharing any
                sensitive information.
              </p>
            </div>

            <div className="grid-2">
              <article className="info-card">
                <h3>Good security practices</h3>
                <ul>
                  <li>Use the servicing details supplied with the card.</li>
                  <li>Check the website domain carefully.</li>
                  <li>Keep receipts and purchase records.</li>
                  <li>Avoid publishing card information online.</li>
                  <li>Be careful with unexpected prize or refund messages.</li>
                </ul>
              </article>

              <article className="info-card">
                <h3>Information this site does not need</h3>
                <p>
                  GiftCardPortal does not need your full card number, PIN, CVV,
                  password or other private payment credentials. Do not send
                  those details through public forms, comments or messages.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq">
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Common questions</div>
              <h2>GiftCardMall/Mygift FAQ</h2>
              <p>
                Concise explanations for common questions about prepaid card
                balances, activation, payment acceptance and safety.
              </p>
            </div>

            <div className="faq-list">
              <details open>
                <summary>What is GiftCardMall/Mygift?</summary>
                <p>
                  It is a search phrase commonly associated with prepaid gift
                  card information. The relevant balance and servicing process
                  depends on the specific card and issuer.
                </p>
              </details>

              <details>
                <summary>How do I check a giftcardmall balance?</summary>
                <p>
                  Start with the instructions printed on your card or packaging.
                  Verify the destination before entering any private
                  information.
                </p>
              </details>

              <details>
                <summary>What does GiftCardMall/Mygift balance mean?</summary>
                <p>
                  It generally refers to the available value remaining on a
                  relevant prepaid card. Recent purchases, authorizations and
                  refunds may affect the displayed amount.
                </p>
              </details>

              <details>
                <summary>
                  What should I know about www.giftcardmall.com mygift?
                </summary>
                <p>
                  Verify the address against the instructions supplied with your
                  specific card. Search results and advertisements alone do not
                  establish that a destination is appropriate.
                </p>
              </details>

              <details>
                <summary>Can a Visa prepaid gift card be used online?</summary>
                <p>
                  It may be possible when the merchant accepts the applicable
                  card and the transaction satisfies the card&apos;s terms and
                  the merchant&apos;s payment requirements.
                </p>
              </details>

              <details>
                <summary>Why was my gift card payment declined?</summary>
                <p>
                  Possible reasons include insufficient available funds,
                  incorrect payment details, merchant restrictions, activation
                  requirements or temporary authorization holds.
                </p>
              </details>

              <details>
                <summary>Is GiftCardPortal an official GiftCardMall service?</summary>
                <p>
                  No. GiftCardPortal is an independent educational website and is
                  not affiliated with GiftCardMall, MyGift, Visa or any
                  individual card issuer.
                </p>
              </details>
            </div>

            <div className="cta">
              <h2>Start with the right information</h2>
              <p>
                Use the documentation provided with your card, verify the
                servicing address and consult the relevant guide above before
                taking action.
              </p>
              <div className="actions">
                <a className="btn btn-primary" href="#balance">
                  Balance Guide
                </a>
                <a className="btn btn-secondary" href="#activation">
                  Activation Guide
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-top">
            <div>
              <div className="footer-brand">GiftCardPortal</div>
              <p>Independent prepaid gift card educational resource.</p>
            </div>

            <nav className="footer-links" aria-label="Footer navigation">
              <a href="#guide">Overview</a>
              <a href="#balance">Balance</a>
              <a href="#activation">Activation</a>
              <a href="#visa">Visa Usage</a>
              <a href="#faq">FAQ</a>
            </nav>
          </div>

          <div className="disclaimer">
            <strong>Disclaimer:</strong> GiftCardPortal is an independent
            informational website. It is not affiliated with or endorsed by
            GiftCardMall, MyGift, Blackhawk Network, Visa, Mastercard, American
            Express, any bank, retailer or card issuer. Card terms and
            procedures may vary. Follow the instructions provided with your
            specific card.
          </div>

          <div className="copyright">
            © 2026 GiftCardPortal. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
