# baseline-utils
Convert the more important but less accessible Baseline into the less important but more accessible CSS


## Typeface pivot lines
http://www.leabhair.ie/sob/tm/index.html

![](http://www.leabhair.ie/sob/tm/tm1.jpg)

```
-- ascender line ---------------
|                   \           \
|               ascender-height  \
|                   /             \
-- mean line -------               \
|                   \               \
|               x-height        body size
|                   /               /
-- baseline --------               /
|                   \             /
|               descender-height /
|                   /           /
-- descender line --------------
```

## Vertical box layout

```
-- Margin box top edge --------------------------------------
|           \                                                \
|         margin-top                                          \
|           /                                                  \
-- Border box top edge -----------------------                  \
|           \                                 \                  \
|        border-top                            \                  \
|           /                                   \                  \
-- Padding box top edge -------------            \                  \
|           \                        \            \                  \
|        padding-top                  \            \ margin-top-to-baseline
|           /                          \            \                /
-- Line box top edge                    \ border-top-to-baseline    /
|           \                            \          /              /
|        half-leading   padding-top-to-baseline    /              /
|           /                            /        /              /
-- Font box top edge                    /        /              /
|           \                          /        /              /
|        fontbox-top-to-baseline      /        /              / 
|           /                        /        /              /
----------------------------------------- Baseline ----------
|           \                        \        \              \
|        fontbox-bottom-to-baseline   \        \              \
|           /                          \        \              \
-- Font box bottom edge                 \        \              \
|           \                            \        \              \
|        half-leading   padding-bottom-to-baseline \              \
|           /                            /          \              \
-- Line box bottom edge                 / border-bottom-to-baseline \
|           \                          /            /                \
|        padding-bottom               /            / margin-bottom-to-baseline
|           /                        /            /                  /
-- Padding box bottom edge ----------            /                  /
|           \                                   /                  /
|        border-bottom                         /                  /
|           /                                 /                  /
-- Border box bottom edge --------------------                  /
|           \                                                  /
|        margin-bottom                                        /
|           /                                                /
-- Margin box bottom edge -----------------------------------
```


## Vertical Rhythm
```
---- Padding box edge ------------------
|           \                           \
|            \                           \
|             \                           \
|        padding-top-to-baseline    = line-height x 2
|             /                           /
|            /                           /
|           /                           /
-- <h2> --------------------------------------------- baseline
|           \                           \
|            \                           \
|             \                           \
|        padding-bottom-to-baseline = line-height x 2
|             /                           /
|            /                           /
|           /                           /
----- Padding box edge -----------------
|           \                           \
|        padding-top-to-baseline    = line-height
|           /                           /           
-- <h3> --------------------------------------------- baseline
|           \                           \   
|        padding-bottom-to-baseline = line-height    
|           /                           /
----- Padding box edge -----------------           
|           \                           \
|        padding-top-to-baseline    = line-height
|           /                           /
-- <p> line 1 --------------------------------------- baseline
|                                       \
|                                     line-height
|                                       /
-- <p> line 2 --------------------------------------- baseline
|           \                           \
|        padding-bottom-to-baseline = line-height
|           /                           /
---- Padding box edge ------------------           
|           \                           \
|        padding-top-to-baseline    = line-height
|           /                           /
-- <p> line 1 --------------------------------------- baseline
|                                       \
|                                     line-height
|                                       /
-- <p> line 2 --------------------------------------- baseline
|           \                           \
|        padding-bottom-to-baseline = line-height
|           /                           /
---- Padding box edge ------------------
|           \                           \
|            \                           \
|             \                           \
|        padding-top-to-baseline    = line-height x 2  
|             /                           / 
|            /                           /
|           /                           /
-- <h3> --------------------------------------------- baseline
|           \                           \
|        padding-bottom-to-baseline = line-height
|           /                           /
---- Padding box edge ------------------
```



## Distance conversion diagram
- CSS distance units do not matter, as long as everything is measured in the same unit
- The same diagram for both top and bottom edges

```
d2b = <desired distance to Baseline> ------- <calculated distance to Line box Edge>
                                              d2l = f(d2b, lh, b2f) = d2b - b2l
                                                                   /  
lh  = <CSS line-height> ----------- <baseline to Line box Edge> --/
                             b2l = half-leading + b2f = (lh - 1)/2 + b2f
                                                     /
b2f = <distance from Baseline to Font box Edge> ----/
```


## Style conversion diagram
font-size is optional and only required for units other than `em`, otherwise `fs = 1` is used.

```
<Computed Style>    --------- <Style Modification to assign>
lh = line-height    ----\            padding-top    = f(pb2b, lh, b2f * fs)
fs = font-size?     ---------------  padding-bottom
                          \
pt = padding-top    ---------------  border-top
pb = padding-bottom ---------------  border-bottom
                             \
bt = border-top     ---------------  margin-top
bb = border-bottom  ---------------  margin-bottom
                      /
<desired distance> --/
pt2b = padding-top-to-baseline
pb2b = padding-bottom-to-baseline
bt2b = border-top-to-baseline
bb2b = border-bottom-to-baseline
mt2b = margin-top-to-baseline
mb2b = margin-bottom-to-baseline
```
