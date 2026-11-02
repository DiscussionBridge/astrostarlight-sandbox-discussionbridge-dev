---
title: "Astro + Starlight to Discourse — V4 workflow check"
description: "A clearly labeled machine-operated native Astro + Starlight sandbox article."
discussionSync: false
discussionCommentsDisplay: interactive
authors:
  - id: discussionbridge-sandbox-check
    name: DiscussionBridge sandbox check
primaryAuthor: discussionbridge-sandbox-check
---

This is a clearly labeled machine-operated V4 sandbox check, authored in Astro + Starlight. DiscussionBridge connects this native page to one continuing Discourse topic.

## Native content remains native

The Markdown file, page layout and navigation belong to Astro + Starlight. DiscussionBridge uses the installed adapter and this site's own scoped connection; it does not copy a Discourse session or connection secret into the public page.

| Item | Expected owner |
| --- | --- |
| Article and navigation | Astro + Starlight |
| Discussion and replies | Discourse |
| Stable binding and delivery | DiscussionBridge |

## Update without another discussion

A later edit should update the same Discourse first post. The page, Bridge Record, topic and replies must retain their identities.

This article is initially not opted into publication while the native binding is checked.

