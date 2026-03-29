import { FaDiscord } from "react-icons/fa";
import { CheckCircle, AlertCircle, Settings, Bell, MessageSquare, ArrowRight, Lock, Unlock, Users, Hash, Shield, RefreshCw } from 'lucide-react';

export default function DiscordIntegrationGuidePage() {

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-lg">
            <FaDiscord size={32} className="text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Discord Integration Guide</h1>
            <p className="text-gray-400">Connect your widgets to Discord and receive real-time notifications in your server</p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-gradient-to-r from-indigo-900/30 to-blue-900/30 p-6 rounded-lg mb-10 border border-blue-600">
        <h2 className="text-2xl font-bold text-white mb-3">What is Discord Integration?</h2>
        <p className="text-gray-300 mb-4">
          The Discord integration allows you to receive instant notifications in your Discord server whenever users interact with your widgets. Connect WidgetKraft to your Discord guild and route widget activity - chat messages, form submissions, feedback - directly to the channels your team already uses.
        </p>
        <div className="bg-gray-900/50 p-4 rounded-lg border border-blue-600/50">
          <p className="text-white font-medium mb-2">Key Benefits:</p>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-indigo-400 flex-shrink-0" />
              <span>Instant notifications for all widget activities in your Discord server</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-indigo-400 flex-shrink-0" />
              <span>Route notifications to any channel within your connected guild</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-indigo-400 flex-shrink-0" />
              <span>Switch guilds anytime without losing your account connection</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-indigo-400 flex-shrink-0" />
              <span>No code required - simple click-to-connect setup</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Step 1: Connect Discord to WidgetKraft */}
      <section className="mb-10">
        <div className="border-l-4 border-blue-600 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">Step 1: Connect Discord to WidgetKraft</h2>
          <p className="text-gray-300">First, authorize WidgetKraft to access your Discord account.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">How to Connect:</h3>

          <ol className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">1</span>
              <div>
                <p className="text-gray-300 mb-2">Navigate to the <strong className="text-white">Integrations</strong> section from the sidebar menu</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">2</span>
              <div>
                <p className="text-gray-300 mb-2">You will see the Discord integration card with a <strong className="text-white">Connect</strong> button</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">3</span>
              <div>
                <p className="text-gray-300 mb-2">Click the <strong className="text-white">Connect</strong> button to begin the OAuth authorization process</p>
              </div>
            </li>
          </ol>

          <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-6 mb-4">
            <div className="text-center">
              <img
                src="/images/integrations/discord/discord-1.png"
                alt="WidgetKraft: Discord Integration Card in Integrations Section"
                className="mx-auto mb-4 rounded-lg shadow-lg max-w-full"
              />
              <p className="text-gray-300 text-sm">Integrations page showing the Discord Connect button</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: OAuth Authorization */}
      <section className="mb-10">
        <div className="border-l-4 border-blue-600 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">Step 2: Complete OAuth Authorization</h2>
          <p className="text-gray-300">Grant WidgetKraft permission to access your Discord account. Once done, you'll be redirected back automatically.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Authorization Process:</h3>

          <ol className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">1</span>
              <div>
                <p className="text-gray-300 mb-2">A Discord authorization page will open, asking you to log in if you aren't already</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">2</span>
              <div>
                <p className="text-gray-300 mb-2">Review the permissions WidgetKraft is requesting:</p>
                <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <Hash size={14} className="text-indigo-400" />
                    <span>Access your username, avatar, and account information</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield size={14} className="text-indigo-400" />
                    <span>Know which guilds you are a member of</span>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">3</span>
              <div>
                <p className="text-gray-300 mb-2">Click <strong className="text-white">Authorize</strong> to grant access</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">4</span>
              <div>
                <p className="text-gray-300 mb-2">You will be automatically redirected back to the WidgetKraft Integrations page, where the Discord card will now show <strong className="text-white">"Connected to (Your Account)"</strong></p>
              </div>
            </li>
          </ol>

          <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-6 mb-4">
            <div className="text-center">
              <img
                src="/images/integrations/discord/discord-2.png"
                alt="WidgetKraft: Discord OAuth Authorization Screen"
                className="mx-auto mb-4 rounded-lg shadow-lg max-w-full"
              />
              <p className="text-gray-300 text-sm">Discord authorization page showing permissions requested by WidgetKraft</p>
            </div>
          </div>

          <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/50">
            <p className="text-indigo-300 text-sm flex items-start gap-2">
              <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
              <span><strong>Account Connected!</strong> Your Discord account is now linked to WidgetKraft. The next step is to connect a specific Discord server (guild) so WidgetKraft knows where to send notifications.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Step 3: Connect a Guild */}
      <section className="mb-10">
        <div className="border-l-4 border-blue-600 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">Step 3: Connect a Guild</h2>
          <p className="text-gray-300">After your account is connected, you'll see two new options on the Discord card - <strong className="text-white">Disconnect</strong> and <strong className="text-white">Connect Guild</strong>. Click <strong className="text-white">Connect Guild</strong> to proceed.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Selecting Your Guild:</h3>

          <ol className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">1</span>
              <div>
                <p className="text-gray-300 mb-2">Click the <strong className="text-white">Connect Guild</strong> button on the Discord integration card</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">2</span>
              <div>
                <p className="text-gray-300 mb-2">A popup will appear listing all Discord servers (guilds) where you have <strong className="text-white">Admin access</strong></p>
                <div className="bg-gray-900 p-3 rounded-lg border border-gray-700 mt-2">
                  <p className="text-gray-400 text-sm">
                    <AlertCircle size={16} className="inline mr-2 text-yellow-500" />
                    <strong>Note:</strong> Only guilds where you have administrator permissions will appear in this list.
                  </p>
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">3</span>
              <div>
                <p className="text-gray-300 mb-2">Select the guild you want to connect to WidgetKraft and click <strong className="text-white">Connect</strong></p>
              </div>
            </li>
          </ol>

          <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-6 mb-4">
            <div className="text-center">
              <img
                src="/images/integrations/discord/discord-3.png"
                alt="WidgetKraft: Click on Connect Guild to fetch all the guilds"
                className="mx-auto mb-4 rounded-lg shadow-lg max-w-full"
              />
              <p className="text-gray-300 mb-2 text-sm">Click on Connect Guild to fetch all the guilds</p>
            </div>
            <div className="text-center">
              <img
                src="/images/integrations/discord/discord-3.1.png"
                alt="WidgetKraft: Connect Guild Popup"
                className="mx-auto mb-4 rounded-lg shadow-lg max-w-full"
              />
              <p className="text-gray-300 text-sm">Guild selector popup showing all servers you have admin access to</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4: Allow the Bot */}
      <section className="mb-10">
        <div className="border-l-4 border-blue-600 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">Step 4: Allow the WidgetKraft Bot into Your Guild</h2>
          <p className="text-gray-300">When connecting WidgetKraft to a guild for the first time, you need to authorize the WidgetKraft bot to join your server so it can post notifications.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Bot Authorization:</h3>

          <ol className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">1</span>
              <div>
                <p className="text-gray-300 mb-2">After selecting your guild, you will be redirected to a Discord page asking you to <strong className="text-white">authorize the WidgetKraft bot</strong> to join the selected server</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">2</span>
              <div>
                <p className="text-gray-300 mb-2">Review the permissions the bot is requesting - these are required for WidgetKraft to post messages in your server's channels:</p>
                <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <MessageSquare size={14} className="text-indigo-400" />
                    <span>Send messages in text channels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Hash size={14} className="text-indigo-400" />
                    <span>Read channel information and messages</span>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">3</span>
              <div>
                <p className="text-gray-300 mb-2">Confirm the server shown in the dropdown matches the guild you selected, then click <strong className="text-white">Authorize</strong></p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">4</span>
              <div>
                <p className="text-gray-300 mb-2">Complete any CAPTCHA or verification steps Discord presents</p>
              </div>
            </li>
          </ol>

          <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-6 mb-4">
            <div className="text-center">
              <img
                src="/images/integrations/discord/discord-4.png"
                alt="WidgetKraft: Discord Bot Authorization Screen"
                className="mx-auto mb-4 rounded-lg shadow-lg max-w-full"
              />
              <p className="text-gray-300 text-sm">Discord bot authorization page - authorize WidgetKraft to join your selected guild</p>
            </div>
          </div>

          <div className="bg-blue-900/20 p-4 rounded-lg border border-indigo-700/50">
            <p className="text-indigo-300 text-sm flex items-start gap-2">
              <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
              <span><strong>First-time only:</strong> This bot authorization step only happens the first time you connect a particular guild. Switching to a different guild later will trigger this step again for that new guild.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Step 5: Guild Connected Confirmation */}
      <section className="mb-10">
        <div className="border-l-4 border-blue-600 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">Step 5: Guild Successfully Connected</h2>
          <p className="text-gray-300">Once the bot is authorized, you'll be redirected back to WidgetKraft with your guild connection confirmed.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">What You'll See:</h3>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <CheckCircle size={20} className="text-indigo-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-300">You'll be automatically redirected back to the WidgetKraft Integrations page</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} className="text-indigo-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-300">The Discord card will now display <strong className="text-white">"Connected to (Your Account) in guild (Your Guild Name)"</strong></p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} className="text-indigo-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-300">Two action buttons will now be visible: <strong className="text-white">Disconnect</strong> and <strong className="text-white">Connect Another Guild</strong></p>
              </div>
            </li>
          </ul>

          <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-6 mb-4">
            <div className="text-center">
              <img
                src="/images/integrations/discord/discord-5.png"
                alt="WidgetKraft: Discord Successfully Connected with Guild"
                className="mx-auto mb-4 rounded-lg shadow-lg max-w-full"
              />
              <p className="text-gray-300 text-sm">Discord card showing connected account and guild name</p>
            </div>
          </div>

          <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/50">
            <p className="text-indigo-300 text-sm flex items-start gap-2">
              <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
              <span><strong>Guild Connected!</strong> WidgetKraft is now linked to your Discord server. You can now connect individual widgets to specific channels within this guild.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Step 6: Switching Guilds */}
      <section className="mb-10">
        <div className="border-l-4 border-blue-600 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">Step 6: Switching to Another Guild</h2>
          <p className="text-gray-300">You can switch your connected guild at any time. Connecting a new guild will automatically remove the previous one.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">How to Switch Guilds:</h3>

          <ol className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">1</span>
              <div>
                <p className="text-gray-300 mb-2">On the Discord integration card, click <strong className="text-white">Connect Another Guild</strong></p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">2</span>
              <div>
                <p className="text-gray-300 mb-2">A popup will appear showing your <strong className="text-white">currently connected guild</strong> alongside all other guilds you have admin access to</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">3</span>
              <div>
                <p className="text-gray-300 mb-2">Select the new guild you'd like to switch to and click <strong className="text-white">Connect</strong></p>
                <div className="bg-yellow-900/20 p-3 rounded-lg border border-yellow-700/50 mt-2">
                  <p className="text-yellow-300 text-sm flex items-start gap-2">
                    <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                    <span><strong>Important:</strong> Connecting a new guild will immediately remove the connection from your previously connected guild. Any widget-to-channel connections on the old guild will also be cleared.</span>
                  </p>
                </div>
              </div>
            </li>
          </ol>

          <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-6 mb-4">
            <div className="text-center">
              <img
                src="/images/integrations/discord/discord-6.1.png"
                alt="WidgetKraft: Click Connect Another Guild to open a modal to see all available options"
                className="mx-auto mb-4 rounded-lg shadow-lg max-w-full"
              />
              <p className="text-gray-300 mb-2 text-sm">Click Connect Another Guild to open a modal to see all available options</p>
            </div>
            <div className="text-center">
              <img
                src="/images/integrations/discord/discord-6.2.png"
                alt="WidgetKraft: Switch Guild Popup"
                className="mx-auto mb-4 rounded-lg shadow-lg max-w-full"
              />
              <p className="text-gray-300 text-sm">Guild switcher popup showing current guild and other available options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 7: Connect Widget to Discord Channel */}
      <section className="mb-10">
        <div className="border-l-4 border-blue-600 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">Step 7: Connect a Widget to a Discord Channel</h2>
          <p className="text-gray-300">With your guild connected, you can now link individual widgets to specific channels within that guild.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Configuration Process:</h3>

          <ol className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">1</span>
              <div>
                <p className="text-gray-300 mb-2">Go to the widget you want to connect (e.g., Live Chat, Feedback Loop, Contact Form)</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">2</span>
              <div>
                <p className="text-gray-300 mb-2">Open the widget's <strong className="text-white">configuration panel</strong></p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">3</span>
              <div>
                <p className="text-gray-300 mb-2">Look for the <strong className="text-white">Connect Discord Channel</strong> button in the integration strip at the top of the panel</p>
                <div className="bg-gray-900 p-3 rounded-lg border border-gray-700 mt-2">
                  <p className="text-gray-400 text-sm">
                    <AlertCircle size={16} className="inline mr-2 text-yellow-500" />
                    <strong>Important:</strong> This button will be <span className="text-gray-500">disabled/grayed out</span> if Discord is not connected or no guild is linked. Complete Steps 1–5 first.
                  </p>
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">4</span>
              <div>
                <p className="text-gray-300 mb-2">Click <strong className="text-white">Connect Discord Channel</strong> - a modal will open listing all text channels from your connected guild</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">5</span>
              <div>
                <p className="text-gray-300 mb-2">Select the channel you want this widget's notifications to appear in</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">6</span>
              <div>
                <p className="text-gray-300 mb-2">Click <strong className="text-white">Connect</strong> - the modal will close and the widget will immediately show the connected channel name</p>
              </div>
            </li>
          </ol>

          <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-6 mb-4">
            <div className="text-center">
              <img
                src="/images/integrations/discord/discord-7.1.png"
                alt="WidgetKraft: Connect Discord Channel Modal"
                className="mx-auto mb-4 rounded-lg shadow-lg max-w-full"
              />
              <p className="text-gray-300 mb-2 text-sm">Open a installed widget configure page & click on Connect Discord Channel</p>
            </div>
            <div className="text-center">
              <img
                src="/images/integrations/discord/discord-7.2.png"
                alt="WidgetKraft: Pick the Discord channel you want to connect to this widget"
                className="mx-auto mb-4 rounded-lg shadow-lg max-w-full"
              />
              <p className="text-gray-300 text-sm">Channel picker modal showing all text channels from your connected Discord guild</p>
            </div>
          </div>

          <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/50">
            <p className="text-indigo-300 text-sm flex items-start gap-2">
              <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
              <span><strong>All Done!</strong> Your widget is now connected to a Discord channel. Every interaction on this widget will send a real-time notification to your chosen channel.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Step 8: Disconnect */}
      <section className="mb-10">
        <div className="border-l-4 border-blue-600 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">Step 8: Disconnecting Discord from WidgetKraft</h2>
          <p className="text-gray-300">If you want to fully remove WidgetKraft's access to your Discord account, you can disconnect at any time from the Integrations page.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">How to Disconnect:</h3>

          <ol className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">1</span>
              <div>
                <p className="text-gray-300 mb-2">Go to the <strong className="text-white">Integrations</strong> page from the sidebar</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">2</span>
              <div>
                <p className="text-gray-300 mb-2">Find the Discord card showing <strong className="text-white">"Connected to (Your Account)"</strong></p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">3</span>
              <div>
                <p className="text-gray-300 mb-2">Click the red <strong className="text-white">Disconnect</strong> button</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">4</span>
              <div>
                <p className="text-gray-300 mb-2">Confirm the disconnection - this will remove your Discord account link, guild connection, and all widget-to-channel connections</p>
              </div>
            </li>
          </ol>

          <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-6 mb-4">
            <div className="text-center">
              <img
                src="/images/integrations/discord/discord-8.png"
                alt="WidgetKraft: Integrations page showing the Disconnect Discord button"
                className="mx-auto mb-4 rounded-lg shadow-lg max-w-full"
              />
              <p className="text-gray-300 text-sm">Integrations page showing the Disconnect Discord button</p>
            </div>
          </div>

          <div className="bg-red-900/20 p-4 rounded-lg border border-red-700/50">
            <p className="text-red-300 text-sm flex items-start gap-2">
              <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
              <span><strong>Warning:</strong> Disconnecting will immediately stop all Discord notifications across all widgets. You will need to go through the full setup again to re-enable it.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Managing Your Integration */}
      <section className="mb-10">
        <div className="border-l-4 border-indigo-500 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">Managing Your Discord Integration</h2>
          <p className="text-gray-300">Common actions and tips for keeping your Discord integration running smoothly.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <Settings size={18} className="text-indigo-400" />
                Change Connected Channel on a Widget
              </h4>
              <p className="text-gray-300 text-sm mb-2">To connect a widget to a different channel:</p>
              <ol className="ml-6 space-y-1 text-sm text-gray-400">
                <li>Go to the widget's configuration panel</li>
                <li>Click the green <strong>"Connected: (Channel Name)"</strong> button</li>
                <li>Confirm removal of the current channel</li>
                <li>Click <strong>"Connect Discord Channel"</strong> again</li>
                <li>Select a different channel and click Connect</li>
              </ol>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <RefreshCw size={18} className="text-indigo-400" />
                Switch to a Different Guild
              </h4>
              <p className="text-gray-300 text-sm mb-2">To switch your active guild without fully disconnecting:</p>
              <ol className="ml-6 space-y-1 text-sm text-gray-400">
                <li>Go to the Integrations page</li>
                <li>Click <strong>"Connect Another Guild"</strong> on the Discord card</li>
                <li>Select a new guild from the popup</li>
                <li>Authorize the bot for the new guild if prompted</li>
                <li>The old guild connection is automatically removed</li>
              </ol>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <Users size={18} className="text-indigo-500" />
                Multiple Widgets, Different Channels
              </h4>
              <p className="text-gray-300 text-sm">
                You can connect different widgets to different channels within the same guild. For example:
              </p>
              <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-400">
                <li>• Live Chat Widget → #customer-support</li>
                <li>• Feedback Loop Widget → #product-feedback</li>
                <li>• Contact Form Widget → #sales-inquiries</li>
              </ul>
              <p className="text-gray-400 text-xs mt-2">
                Each widget maintains its own Discord channel connection independently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="mb-10">
        <div className="bg-gray-800 border border-blue-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <AlertCircle size={24} className="text-indigo-400" />
            Troubleshooting
          </h2>

          <div className="space-y-4 text-gray-300">
            <div>
              <h4 className="font-semibold text-white mb-2">Q: The "Connect Discord Channel" button is disabled</h4>
              <p className="text-sm text-gray-400">
                <strong>Solution:</strong> Discord is not connected or no guild is linked yet. Complete Steps 1–5 first - you need both an account connection and an active guild before you can link channels to widgets.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Q: My guild doesn't appear in the guild selector</h4>
              <p className="text-sm text-gray-400">
                <strong>Solution:</strong> Only guilds where you have <strong>Administrator</strong> permissions are shown. Make sure you have admin rights on the server you want to connect, then try again.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Q: No channels appear in the channel picker</h4>
              <p className="text-sm text-gray-400 mb-2">
                <strong>Check:</strong>
              </p>
              <ul className="ml-6 space-y-1 text-sm text-gray-400">
                <li>• Confirm the WidgetKraft bot was successfully authorized to your guild (Step 4)</li>
                <li>• Verify the bot has permission to view channels in your server</li>
                <li>• Try disconnecting the guild and reconnecting it to re-trigger bot authorization</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Q: I'm not receiving notifications in Discord</h4>
              <p className="text-sm text-gray-400 mb-2">
                <strong>Check:</strong>
              </p>
              <ul className="ml-6 space-y-1 text-sm text-gray-400">
                <li>• Verify Discord is connected and a guild is shown on the Integrations page</li>
                <li>• Confirm the widget is connected to a specific channel (shown in the config panel)</li>
                <li>• Check that the WidgetKraft bot is still a member of your guild and has <strong>Send Messages</strong> permission on the target channel</li>
                <li>• Test the widget to trigger a notification</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Q: Can I connect multiple widgets to the same channel?</h4>
              <p className="text-sm text-gray-400">
                <strong>Answer:</strong> Yes! Multiple widgets can send notifications to the same Discord channel. All messages will appear in that channel tagged by widget type so you can tell them apart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 p-8 rounded-lg border border-blue-600">
        <h2 className="text-3xl font-bold mb-4 text-white">Summary</h2>
        <p className="text-gray-300 mb-4">With Discord integration, you can:</p>
        <div className="grid md:grid-cols-2 gap-3 mb-6">
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-indigo-400 flex-shrink-0 mt-0.5" />
            <span>Receive real-time widget notifications directly in your Discord server</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-indigo-400 flex-shrink-0 mt-0.5" />
            <span>Route different widgets to different channels within your guild</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-indigo-400 flex-shrink-0 mt-0.5" />
            <span>Switch guilds anytime without reconnecting your account</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-indigo-400 flex-shrink-0 mt-0.5" />
            <span>Keep your entire team informed instantly where they already work</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-indigo-400 flex-shrink-0 mt-0.5" />
            <span>No coding required - simple click-to-connect setup</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-indigo-400 flex-shrink-0 mt-0.5" />
            <span>Easily manage, switch, or disconnect integrations anytime</span>
          </div>
        </div>
        <div className="bg-gray-900/50 p-4 rounded-lg border border-blue-600">
          <p className="text-gray-300 italic">
            <strong className="text-white">Stay connected where your community lives</strong> – With Discord integration, your team gets instant visibility into every widget interaction, right inside the server they're already in. No missed messages, no switching tools.
          </p>
        </div>
      </section>
    </div>
  );
}