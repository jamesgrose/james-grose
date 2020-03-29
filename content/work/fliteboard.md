---
title: "Fliteboard"
date: "2019-06-01"
image: "/images/work/fliteboard/hero.jpg"
description: "A custom ecommerce solution across 13 regions"
icons: ["vue", "laravel", "stripe", "aws"]
role: "Team Lead, Solutions Architect, Backend Developer"
---

[Fliteboard](https://fliteboard.com) had recently received a large round of
funding led by Australia's biggest investors, and with millions in presales had
no framework to build and deliver products at scale. The [B.B.E](https://bbe.io)
team was engaged to develop and implement a launch strategy ensuring pre-sales
fulfilment and market launch in 90 days.

From brief to market launch, the site was completely rebuilt and launched with
global shipping and online sales in 13 regions.

<div class="markdown-video">
<video poster="https://fliteboard.com/video/fliteboard-hero-poster.png" autoplay="autoplay" playsinline="" muted="muted" loop="loop">
<source src="https://fliteboard.com/video/fliteboard-hero.webm" type="video/webm; codecs=vp9,vorbis">
<source src="https://fliteboard.com/video/fliteboard-hero.mp4" type="video/mp4">
</video>
</div>

With a complex product structure comprised of 9 individual components from a
pool of 20+ components, which in turn are each constructed from 100+ units,
there were 672 individual SKUs for each possible product bundle.

To solve this, I designed and implemented a solution in which products could be
effectively tracked by their components, but purchased as a single configurable
product by the customer.

<p class="markdown-image-md">
<img src="/images/work/fliteboard/poster-1.png">
</p>

This reduction in inventory management overheard contributed to successfully
forecasting sales and reducing lead time on orders from 3 months to 6 weeks.

The solution was deployed in the form of a statically compiled frontend, and an
autoscaling backend deployed to a lambda within AWS.

# The result
- Rolled out to 13 regions
- On track to realise $17m in year 1 sales
- 175% increased revenue
- 426% increase in traffic
- 4901 assertions across 169 automated unit tests, covering all aspects of the API
- Reduction of server response time from 4-8 seconds, down to .0002 seconds, with automated and scalable hosting

