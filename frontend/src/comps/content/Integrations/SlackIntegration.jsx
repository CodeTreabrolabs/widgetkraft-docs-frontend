import { FaSlack } from "react-icons/fa";
import { CheckCircle, AlertCircle, Settings, Bell, MessageSquare, ArrowRight, Lock, Unlock, Users, Hash } from 'lucide-react';

export default function SlackIntegrationGuidePage() {
  
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-lg">
            <FaSlack size={32} className="text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Slack Integration Guide</h1>
            <p className="text-gray-400">Connect your widgets to Slack and receive real-time notifications</p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-lg mb-10 border border-blue-600">
        <h2 className="text-2xl font-bold text-white mb-3">What is Slack Integration?</h2>
        <p className="text-gray-300 mb-4">
          The Slack integration allows you to receive instant notifications in your Slack workspace whenever users interact with your widgets. Whether it's a new chat message, feedback submission, or form completion, your team stays informed in real-time.
        </p>
        <div className="bg-gray-900/50 p-4 rounded-lg border border-blue-600/50">
          <p className="text-white font-medium mb-2">Key Benefits:</p>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
              <span>Instant notifications for all widget activities</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
              <span>Route notifications to specific channels</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
              <span>Support for both public and private channels</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
              <span>No code required - simple click-to-connect setup</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Step 1: Connect Slack to WidgetKraft */}
      <section className="mb-10">
        <div className="border-l-4 border-blue-600 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">Step 1: Connect Slack to WidgetKraft</h2>
          <p className="text-gray-300">First, you need to authorize WidgetKraft to access your Slack workspace.</p>
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
                <p className="text-gray-300 mb-2">You will see the Slack integration card with a <strong className="text-white">Connect</strong> button</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">3</span>
              <div>
                <p className="text-gray-300 mb-2">Click the <strong className="text-white">Connect</strong> button to begin the authorization process</p>
              </div>
            </li>
          </ol>

          <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-6 mb-4">
            <div className="text-center">
              <img 
                src="/images/integrations/slack/slack-1.png" 
                alt="Widgetkraft: Slack Integration Card in Integrations Section" 
                className="mx-auto mb-4 rounded-lg shadow-lg max-w-full" 
              />
              <p className="text-gray-300 text-sm">Integrations page showing the Slack Connect button</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Authorize Slack Workspace */}
      <section className="mb-10">
        <div className="border-l-4 border-blue-600 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">Step 2: Authorize Slack Workspace Access</h2>
          <p className="text-gray-300">Grant WidgetKraft permission to access your Slack workspace and channels.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Authorization Process:</h3>
          
          <ol className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">1</span>
              <div>
                <p className="text-gray-300 mb-2">A Slack authorization page will open in a new window/tab</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">2</span>
              <div>
                <p className="text-gray-300 mb-2">Select your <strong className="text-white">Slack workspace</strong> from the dropdown (if you have multiple workspaces)</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">3</span>
              <div>
                <p className="text-gray-300 mb-2">Review the permissions that WidgetKraft is requesting:</p>
                <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <Hash size={14} className="text-blue-600" />
                    <span>View content and info about channels & conversations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageSquare size={14} className="text-blue-600" />
                    <span>Send messages and perform actions in channels</span>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">4</span>
              <div>
                <p className="text-gray-300 mb-2">Click <strong className="text-white">Allow</strong> to grant WidgetKraft access to your workspace</p>
              </div>
            </li>
          </ol>

          <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-6 mb-2">
            <div className="text-center">
              <img 
                src="/images/integrations/slack/slack-2.png" 
                alt="Widgetkraft: Slack Authorization Screen" 
                className="mx-auto mb-4 rounded-lg shadow-lg max-w-full" 
              />
              <p className="text-gray-300 text-sm">Slack authorization page showing workspace selection and permissions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Confirmation */}
      <section className="mb-10">
        <div className="border-l-4 border-blue-600 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">Step 3: Connection Confirmed</h2>
          <p className="text-gray-300">Once authorized, you'll be redirected back to WidgetKraft.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">What Happens Next:</h3>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-300">You'll be automatically redirected back to the WidgetKraft Integrations page</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-300">The Slack card will now show <strong className="text-white">"Connected to (Your Workspace Name)"</strong> with your workspace name</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-300">A <strong className="text-white">Disconnect</strong> button will be available if you need to revoke access</p>
              </div>
            </li>
          </ul>

          <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-6 mb-4">
            <div className="text-center">
              <img 
                src="/images/integrations/slack/slack-3.png" 
                alt="Widgetkraft: Slack Successfully Connected" 
                className="mx-auto mb-4 rounded-lg shadow-lg max-w-full" 
              />
              <p className="text-gray-300 text-sm">Slack integration showing "Connected to (Your Workspace Name)" status</p>
            </div>
          </div>

          <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/50">
            <p className="text-blue-300 text-sm flex items-start gap-2">
              <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
              <span><strong>Success!</strong> Slack is now connected to your WidgetKraft account. You can now configure individual widgets to send notifications to specific Slack channels.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Step 4: Connect Widget to Slack Channel */}
      <section className="mb-10">
        <div className="border-l-4 border-blue-600 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">Step 4: Connect a Widget to a Slack Channel</h2>
          <p className="text-gray-300">Now that Slack is connected, you can configure individual widgets to send notifications to specific channels.</p>
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
                <p className="text-gray-300 mb-2">Look for the <strong className="text-white">Connect Slack Channel</strong> button in the settings</p>
                <div className="bg-gray-900 p-3 rounded-lg border border-gray-700 mt-3">
                  <p className="text-gray-400 text-sm">
                    <AlertCircle size={16} className="inline mr-2 text-yellow-500" />
                    <strong>Important:</strong> This button will be <span className="text-gray-500">disabled/grayed out</span> if Slack is not connected to your WidgetKraft account. It becomes clickable only after completing Steps 1-3.
                  </p>
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">4</span>
              <div>
                <p className="text-gray-300 mb-2">Click the <strong className="text-white">Connect Slack Channel</strong> button</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 font-medium">5</span>
              <div>
                <p className="text-gray-300 mb-2">A modal will appear showing all available Slack channels from your workspace</p>
              </div>
            </li>
          </ol>

          <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-6 mb-4">
            <div className="text-center">
              <img 
                src="/images/integrations/slack/slack-4.png" 
                alt="Widgetkraft: Connect Slack Channel Modal" 
                className="mx-auto mb-4 rounded-lg shadow-lg max-w-full" 
              />
              <p className="text-gray-300 text-sm">Modal showing all available public Slack channels to connect</p>
            </div>
          </div>

          <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-6 mb-4">
            <div className="text-center">
              <img 
                src="/images/integrations/slack/slack-5.png" 
                alt="Widgetkraft: Widget Configuration with Connect Slack Channel Button" 
                className="mx-auto mb-4 rounded-lg shadow-lg max-w-full" 
              />
              <p className="text-gray-300 text-sm">Widget configuration panel showing the Connect Slack Channel button</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 5: Select Channel */}
      <section className="mb-10">
        <div className="border-l-4 border-blue-600 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">Step 5: Select Your Slack Channel</h2>
          <p className="text-gray-300">Choose which Slack channel should receive notifications from this widget.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Channel Selection:</h3>
          
          <div className="space-y-4 mb-6">
            <div>
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <Hash size={18} className="text-blue-600" />
                Public Channels
              </h4>
              <p className="text-gray-300 text-sm mb-3">All public channels in your workspace will be displayed automatically in the channel selection modal.</p>
              <ul className="space-y-2 ml-6 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-blue-600" />
                  <span>Browse through the list of channels (e.g., #new-channel, #social, #social-media)</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-blue-600" />
                  <span>Click on the channel you want to connect</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-blue-600" />
                  <span>Selected channel will be highlighted (e.g., with a green background and checkmark)</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/50">
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <Lock size={18} className="text-blue-600" />
                Private Channels
              </h4>
              <p className="text-gray-300 text-sm mb-3">Private channels won't appear in the list initially. To connect a private channel:</p>
              <ol className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-medium">1</span>
                    <span>Open Slack and navigate to the channel where you want to add the app</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-medium">2</span>
                    <span>Click the channel name at the top to open channel settings</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-medium">3</span>
                    <span>Select <strong>"Integrations"</strong> or <strong>"Apps"</strong> from the menu</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-medium">4</span>
                    <span>Click <strong>"Add an app"</strong> or <strong>"Invite an app"</strong></span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-medium">5</span>
                    <span>Search for the Widgetkraft app and select it to invite</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-medium">6</span>
                    <span>The app is now added and can post messages in this channel</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-medium">7</span>
                  <span>Return to WidgetKraft and open the channel selection modal again</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-medium">8</span>
                  <span>Your private channel will now appear in the list</span>
                </li>
              </ol>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Finalizing Connection:</h4>
              <ol className="space-y-2 ml-6 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-blue-600" />
                  <span>After selecting your desired channel, click the <strong className="text-white">Connect</strong> button</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-blue-600" />
                  <span>The modal will close and the widget will now be connected to that Slack channel</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-blue-600" />
                  <span>You'll start receiving notifications in the selected channel whenever users interact with this widget</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/50">
            <p className="text-blue-300 text-sm flex items-start gap-2">
              <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
              <span><strong>All Done!</strong> Your widget is now connected to Slack. Any activity on this widget will send real-time notifications to your chosen Slack channel.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Managing Your Integration */}
      <section className="mb-10">
        <div className="border-l-4 border-blue-500 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">Managing Your Slack Integration</h2>
          <p className="text-gray-300">Learn how to modify, disconnect, or troubleshoot your Slack integration.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Common Actions:</h3>
          
          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <Settings size={18} className="text-blue-600" />
                Change Connected Channel
              </h4>
              <p className="text-gray-300 text-sm mb-2">To connect a widget to a different Slack channel:</p>
              <ol className="ml-6 space-y-1 text-sm text-gray-400">
                <li>Go to the widget's configuration panel</li>
                <li>Click "Connected to (Your Channel Name)"</li>
                <li>Disconnect the current channel</li>
                <li>Select a new channel from the modal</li>
                <li>Click "Connect Slack Channel" again</li>
                <li>Select Differnt channel this time</li>
                <li>Click "Connect" to update</li>
              </ol>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <AlertCircle size={18} className="text-red-500" />
                Disconnect Slack from WidgetKraft
              </h4>
              <p className="text-gray-300 text-sm mb-2">To completely disconnect Slack from your WidgetKraft account:</p>
              <ol className="ml-6 space-y-1 text-sm text-gray-400">
                <li>Go to the Integrations page</li>
                <li>Find the Slack integration card (showing "Connected to (Your Workspace Name)")</li>
                <li>Click the red "Disconnect" button</li>
                <li>Confirm the disconnection</li>
                <li>All widget-to-channel connections will be removed</li>
              </ol>
              <p className="text-yellow-300 text-xs mt-2 flex items-center gap-2">
                <AlertCircle size={14} className="flex-shrink-0" />
                Note: Disconnecting will stop all Slack notifications for all widgets
              </p>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <Users size={18} className="text-blue-500" />
                Multiple Widgets, Different Channels
              </h4>
              <p className="text-gray-300 text-sm">
                You can connect different widgets to different Slack channels. For example:
              </p>
              <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-400">
                <li>• Live Chat Widget → #customer-support</li>
                <li>• Feedback Loop Widget → #product-feedback</li>
                <li>• Contact Form Widget → #sales-inquiries</li>
              </ul>
              <p className="text-gray-400 text-xs mt-2">
                Each widget can maintains its own Slack channel connection independently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="mb-10">
        <div className="bg-gray-800 border border-yellow-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <AlertCircle size={24} className="text-blue-500" />
            Troubleshooting
          </h2>
          
          <div className="space-y-4 text-gray-300">
            <div>
              <h4 className="font-semibold text-white mb-2">Q: The "Connect Slack Channel" button is disabled</h4>
              <p className="text-sm text-gray-400">
                <strong>Solution:</strong> This means Slack is not connected to your WidgetKraft account yet. Complete Steps 1-3 first to authorize Slack integration.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Q: My private channel doesn't appear in the list</h4>
              <p className="text-sm text-gray-400">
                <strong>Solution:</strong> Invite WidgetKraft to your private channel by typing @WidgetKraft in the channel and accepting the invitation prompt.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Q: I'm not receiving notifications</h4>
              <p className="text-sm text-gray-400 mb-2">
                <strong>Check:</strong>
              </p>
              <ul className="ml-6 space-y-1 text-sm text-gray-400">
                <li>• Verify Slack is connected (green status on Integrations page)</li>
                <li>• Confirm the widget is connected to a specific channel</li>
                <li>• Test the widget to trigger a notification</li>
                <li>• Check if WidgetKraft bot is still in the channel</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Q: Can I connect multiple widgets to the same channel?</h4>
              <p className="text-sm text-gray-400">
                <strong>Answer:</strong> Yes! You can connect multiple widgets to the same Slack channel. All notifications will appear in that channel, tagged by widget type.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-lg border border-blue-600">
        <h2 className="text-3xl font-bold mb-4 text-white">Summary</h2>
        <p className="text-gray-300 mb-4">With Slack integration, you can:</p>
        <div className="grid md:grid-cols-2 gap-3 mb-6">
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Receive real-time notifications for all widget interactions</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Route different widgets to different Slack channels</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Connect to both public and private channels</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Keep your entire team informed instantly</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>No coding required - simple click-to-connect setup</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Easily manage and disconnect integrations anytime</span>
          </div>
        </div>
        <div className="bg-gray-900/50 p-4 rounded-lg border border-blue-600">
          <p className="text-gray-300 italic">
            <strong className="text-white">Stay connected and responsive</strong> – With Slack integration, your team never misses important customer interactions. Whether it's a support request, feedback, or a new lead, you'll know instantly.
          </p>
        </div>
      </section>
    </div>
  );
}