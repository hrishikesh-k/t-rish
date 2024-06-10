<script lang="ts">
  import CImage from '~/client/components/c-image.svelte'
  import {page} from '$app/stores'
</script>
<h1 class="font-300 font-serif m-0 m-b-12 m-t-6 text-12">{$page.data.title}</h1>
<h2 class="font-300 font-serif m-0 m-b-6 text-8">Hamilton Beach</h2>
<p class="m-0 m-b-6">The campaign for the home appliances company Hamilton Beach's "Stack & Press Bowl Chopper" took a humorous approach by signifying the chopping of patriarchy. Atypical to the brand's advertising strategy, the objective for this campaign was to leave the audience with a dual message - a utilitarian one, and the other a social one.</p>
<CImage name="hamilton-1"/>
<CImage name="hamilton-2"/>
<h2 class="font-300 font-serif m-0 m-y-6 text-8">Durex</h2>
<p class="m-0 m-b-6">For world's leading sexual well-being brand, Durex, the objective was to produce quirky advertisements while still breaking the stigma and talking about underrepresented subjects. The first advertisement showcases that the brand caters to many a different sizes. The second advertisement talks about the importance of safe sex. The direction for this campaign was to indirectly portray both of the above mentioned messages in a manner that doesn't seem lewd.</p>
<CImage name="durex-1"/>
<CImage name="durex-2"/>
<h2 class="font-300 font-serif m-0 m-y-6 text-8">Allstar</h2>
<p class="m-0 m-b-6">Allstar, the fencing clothing, weapons, and installations brand is known for their high quality and steadily evolving nature. The campaign above shows Allstar products in a manner unconventional to the brand — a manner that shows their products in a real life setting. The campaign was almost like a testimonial for the values of innovation and performance the brand is known for.</p>
<CImage name="allstar-1"/>
<div class="sm:flex sm:gap-6">
  <div style="flex:calc({$page.data.resources['allstar-2'].width}/{$page.data.resources['allstar-2'].height})">
    <CImage name="allstar-2"/>
  </div>
  <div style="flex:calc({$page.data.resources['allstar-3'].width}/{$page.data.resources['allstar-3'].height})">
    <CImage name="allstar-3"/>
  </div>
</div>
<h2 class="font-300 font-serif m-0 m-y-6 text-8">Hershey's</h2>
<p class="m-0 m-b-6">Hershey's' advertising strategy is traditionally focused on the emotional connection consumers have with the Hershey's brand as a whole. The vision behind this campaign was to stay on track with Hershey's actual advertising strategy but steering away from the usual imagery and videos. As such this campaign is in itself a pun for the "Hershey's Kisses" chocolate. Each kiss stain represents a different flavour of the chocolate. While a kiss stain intrinsically is a symbol of emotion and love, the usage of graphical illustrations is a step away from what Hershey's as a brand conventionally do.</p>
<div class="sm:flex sm:gap-6">
  <div style="flex:calc({$page.data.resources['hersheys-1'].width}/{$page.data.resources['hersheys-1'].height})">
    <CImage name="hersheys-1"/>
  </div>
  <div style="flex:calc({$page.data.resources['hersheys-2'].width}/{$page.data.resources['hersheys-2'].height})">
    <CImage name="hersheys-2"/>
  </div>
</div>