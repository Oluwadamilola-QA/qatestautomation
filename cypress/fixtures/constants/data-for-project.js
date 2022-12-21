export const userDetails = {
    email: "adejuwondamilola@yahoo.com",
    password: "Damilola1989!"
};

export const newTeamsToAdd = ['me-idk'];

export const customChannelCreationRequestBody = (title, teamsFullDetails, teamId) => {
    return {
        "type": "CUSTOM",
        "notification_email": "",
        "notification_sound": "chat.mp3",
        "username": "",
        "password": "",
        "password_is_null": false,
        "title": title,
        "color": null,
        "teams": teamsFullDetails,
        "users": [],
        "reopen_closed_ticket": 1,
        "business_hour_id": 296984,
        "is_private": false,
        "reassign_reopened_ticket": false,
        "reopen_closed_ticket_time_window_days": 30,
        "voipChannel": {
            "welcome_greeting_id": null,
            "voicemail_greeting_id": null,
            "no_answer_greeting_id": null,
            "outgoing_caller_id": null,
            "allow_calls_outside_business_hours": true,
            "record": true,
            "queue_size_limit": 5,
            "queue_time_limit": 30,
            "country": "NL",
            "phone_number": {
                "requires_address": false
            },
            "voip_overflow": [],
            "outside_business_hours_phone_number": null,
            "overflow_phone_number": null,
            "voip_ivr_menu_id": null,
            "meta": {},
            "enable_voicemail": 1,
            "store_missed_calls": 1,
            "provider": "TWILIO_TRENGO",
            "sip_devices": [
                {
                    "user_id": null,
                    "extension": null,
                    "meta": {}
                }
            ]
        },
        "wechatChannel": {
            "token": "RdWoIusf4p0yb4DCWXXf0enHpO1O2eED"
        },
        "whatsappChannel": {
            "meta": {},
            "sms_channel_id": null,
            "provider": "sandbox"
        },
        "waSandboxNumbers": [],
        "voipSandboxNumbers": [],
        "smsChannel": {
            "type": "SEND_ONLY",
            "meta": {},
            "provider": "TWILIO_TRENGO",
            "country": "NL"
        },
        "facebookChannel": {},
        "twitterChannel": {
            "private_messages": 1,
            "mentions": 1
        },
        "instagramChannel": {
            "instagram_business_account_id": null,
            "private_messages": 0,
            "comments": 1,
            "mentions": 1
        },
        "gbmChannel": {
            "brand_id": null,
            "agent_id": null,
            "meta": {
                "logoAttachmentId": null,
                "gbmAgent": {
                    "businessMessagesAgent": null
                },
                "gbmBrand": null,
                "agentVerificationContact": null
            }
        },
        "team_ids": teamId,
        "user_ids": []
    }
}

export const teamFullDetailsForCustomChannelMessageSendTest  = [
    {
        "id": 346599,
        "name": "me-idk",
        "load_balancing_enabled": false,
        "consider_user_availability": false,
        "isDisabled": false
    },
    {
        "id": 345639,
        "name": "idk-test",
        "load_balancing_enabled": false,
        "consider_user_availability": false,
        "isDisabled": false
    }
];

export const teamIdsForCustomChannelMessageSendTest = [
    346599,
    345639
];

export const customChannelMessageRequestBody = (identifier, text, channel) => {
    return {//custom-1234579279283, 01Cu2YInFq6Vv5SjMsZ8aa3Gj
        "contact": {
             "identifier": identifier
        },
        "body": {
             "text": text
        },
        "channel": channel
   }
}