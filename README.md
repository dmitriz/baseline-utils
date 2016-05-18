# baseline2padding
Convert the more important but less accessible Baseline into the less important but more accessible CSS


## Distance conversion diagram

```
 x1 = <desired distance From Baseline> ------- <calculated distance to Line box Edge>
                                                                = x1 - y2
                                                                    /  
 x2 = <CSS line-height> ------------ <baseline to Line box Edge> --/
                                    y2 = half-leading + x3 = (x2 - 1)/2 + x3
                                                     /
 x3 = <distance From Baseline to Font box Edge> ----/
```


## Style conversion diagram
Font Size is optional and only required for units other than `em`

```
  <Computed Style> ------------ <Style Modification to assign>
  [line-height, font-size?] ---------- padding-top
               \                    \  padding-bottom
                \
  padding-top -----------------------  border-top
  padding-bottom --------------------  border-bottom
                              \
  border-top ------------------------  margin-top
  border-bottom ---------------------  margin-bottom
                                            /
  <desired distance> ----------------------/
  padding-top-from-baseline
  padding-bottom-from-baseline
  border-top-from-baseline
  border-bottom-from-baseline
  margin-top-from-baseline
  margin-bottom-from-baseline

```